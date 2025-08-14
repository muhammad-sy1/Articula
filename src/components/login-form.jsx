import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useEffect, useState } from "react";

export function LoginForm({ className, ...props }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [isInitializing, setIsInitializing] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [curr_id, setCurr_id] = useState("");
  const [curr_username, setCurr_username] = useState("");
  const [xCsrfToken, setXCsrfToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch(`https://tamkeen-dev.com/api/user/login?_format=json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.username,
        pass: formData.password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errData) => {
            throw new Error(errData.message || "LOGIN FAILED");
          }); // Because response on credentials fails is type of json

          // throw new Error(`${response.status} - ${JSON.stringify(response.statusText)} - something went wrong`)
          // RESPONSE TEXT WHEN API RETURN TEXT
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setXCsrfToken(data.csrf_token);
        // localStorage.setItem("csrf_token", data.csrf_token);
        // localStorage.setItem("logout_token", data.logout_token);

        localStorage.setItem("uid", data.current_user.uid);
        setCurr_id(data.current_user.uid);

        localStorage.setItem("name", data.current_user.name);
        setCurr_username(data.current_user.name);

        setIsAuthenticated(true);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      })
      .finally(() => {
        console.log("finally");
        setIsLoading(false);
      });
  };

  useEffect(() => {
    // const getCsrfToken = localStorage.getItem("csrf_token");
    // const getLogoutToken = localStorage.getItem("logout_token");
    const getUid = localStorage.getItem("uid");
    const getName = localStorage.getItem("name");

    if (xCsrfToken) {
      setIsAuthenticated(true);
      setCurr_id(getUid);
      setCurr_username(getName);
    }

    setIsInitializing(false);
  }, []);

  if (isInitializing) {
    return <div>Blank</div>;
  }

  if (isAuthenticated) {
    return (
      <h1>
        Hello {curr_username}. your id is {curr_id}
      </h1>
    );
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form action="" onSubmit={handleFormSubmit}>
        <Card className="rounded-none">
          <CardHeader>
            <CardTitle className="text-lg">Login to your account</CardTitle>
            <CardDescription>
              Enter your username below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    disabled={isLoading}
                    id="username"
                    type="username"
                    placeholder=""
                    required
                    value={formData.username}
                    onInput={(e) => {
                      setFormData({
                        ...formData,
                        username: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={formData.password}
                    onInput={(e) => {
                      setFormData({
                        ...formData,
                        password: e.target.value,
                      });
                    }}
                  />
                </div>
                {error ? <div style={{ color: "red" }}>{error}</div> : ""}

                <div className="flex flex-col gap-3">
                  <Button
                    type="submit"
                    className="w-full rounded-none cursor-pointer primary-btn"
                  >
                    <button
                      disabled={
                        isLoading ||
                        formData.password.length < 6 ||
                        formData.username.length < 3
                      }
                    >
                      {isLoading ? <i>Signing in....</i> : "Sign in"}
                    </button>
                  </Button>
                  {/* <Button variant="outline" className="w-full">
                  Login with Google
                </Button> */}
                </div>
              </div>
              {/* <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div> */}
            </form>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
