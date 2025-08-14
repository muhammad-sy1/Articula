import React from "react";

const OtherAuthentication = () => {
  return (
    <div className="xl:w-5/6 w-full">
      <div className="flex relative w-full items-center py-6">
        <div className=" w-full h-0.5 bg-gray-100"></div>
        <div className="absolute flex bg-white p-3 w-fit text-gray-500 start-2/5">
          Sign up with
        </div>
      </div>
      <div className="grid grid-cols-3 w-full gap-3">
        <div className="col-span-1">
          <a
            href="#"
            className="flex hover:shadow-(--shadow-gray-800) border border-gray-100"
          >
            <div className="size-10 border-e border-gray-100 flex justify-center items-center">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5765_2067)">
                  <path
                    d="M4.43242 12.0846L3.73625 14.6835L1.19176 14.7373C0.431328 13.3269 0 11.7132 0 9.99832C0 8.34008 0.403281 6.77633 1.11812 5.39941H1.11867L3.38398 5.81473L4.37633 8.06645C4.16863 8.67195 4.05543 9.32195 4.05543 9.99832C4.05551 10.7324 4.18848 11.4357 4.43242 12.0846Z"
                    fill="#FBBB00"
                  />
                  <path
                    d="M19.8252 8.13159C19.94 8.73651 19.9999 9.36124 19.9999 9.99972C19.9999 10.7157 19.9246 11.414 19.7812 12.0876C19.2944 14.38 18.0224 16.3816 16.2604 17.7981L16.2598 17.7975L13.4065 17.6519L13.0027 15.131C14.1719 14.4453 15.0857 13.3723 15.567 12.0876H10.2197V8.13159H15.645H19.8252Z"
                    fill="#518EF8"
                  />
                  <path
                    d="M16.2595 17.7965L16.2601 17.797C14.5464 19.1745 12.3694 19.9987 9.99965 19.9987C6.19141 19.9987 2.88043 17.8701 1.19141 14.7377L4.43207 12.085C5.27656 14.3388 7.45074 15.9432 9.99965 15.9432C11.0952 15.9432 12.1216 15.647 13.0024 15.13L16.2595 17.7965Z"
                    fill="#28B446"
                  />
                  <path
                    d="M16.383 2.30219L13.1434 4.95437C12.2319 4.38461 11.1544 4.05547 10 4.05547C7.39344 4.05547 5.17859 5.73348 4.37641 8.06812L1.11871 5.40109H1.11816C2.78246 2.1923 6.1352 0 10 0C12.4264 0 14.6511 0.864297 16.383 2.30219Z"
                    fill="#F14336"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5765_2067">
                    <rect width={20} height={20} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex grow justify-center items-center">Google</div>
          </a>
        </div>
        <div className="col-span-1">
          <a
            href="#"
            className="flex hover:shadow-(--shadow-gray-800) border border-gray-100"
          >
            <div className="size-10 border-e border-gray-100 flex justify-center items-center">
              <svg
                width={10}
                height={20}
                viewBox="0 0 10 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.25 6.875V4.375C6.25 3.685 6.81 3.125 7.5 3.125H8.75V0H6.25C4.17875 0 2.5 1.67875 2.5 3.75V6.875H0V10H2.5V20H6.25V10H8.75L10 6.875H6.25Z"
                  fill="#4267B2"
                />
              </svg>
            </div>
            <div className="flex grow justify-center items-center">
              Facebook
            </div>
          </a>
        </div>
        <div className="col-span-1">
          <a
            href="#"
            className="flex hover:shadow-(--shadow-gray-800) border border-gray-100"
          >
            <div className="size-10 border-e border-gray-100 flex justify-center items-center">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5765_2178)">
                  <path
                    d="M13.7493 0C12.6831 0.0737496 11.4368 0.756246 10.7106 1.64499C10.0481 2.45124 9.5031 3.64873 9.7156 4.81247C10.8806 4.84872 12.0843 4.14998 12.7818 3.24623C13.4343 2.40499 13.9281 1.21499 13.7493 0Z"
                    fill="black"
                  />
                  <path
                    d="M17.9624 6.71013C16.9387 5.42639 15.5 4.6814 14.1412 4.6814C12.3475 4.6814 11.5887 5.54014 10.3425 5.54014C9.05749 5.54014 8.08125 4.6839 6.53001 4.6839C5.00627 4.6839 3.38378 5.61514 2.35503 7.20763C0.908792 9.45012 1.15629 13.6663 3.50003 17.2576C4.33877 18.5426 5.45877 19.9876 6.92376 20.0001C8.2275 20.0126 8.595 19.1638 10.3612 19.1551C12.1275 19.1451 12.4625 20.0113 13.7637 19.9976C15.23 19.9863 16.4112 18.3851 17.2499 17.1001C17.8512 16.1788 18.0749 15.7151 18.5412 14.6751C15.15 13.3838 14.6062 8.56137 17.9624 6.71013Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5765_2178">
                    <rect width={20} height={20} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex grow justify-center items-center">Apple</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OtherAuthentication;
