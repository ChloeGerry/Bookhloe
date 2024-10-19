import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Yaldevi:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header>
          <div className="absolute top-0 right-0">
            <svg
              width="350"
              height="374"
              viewBox="0 0 350 374"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M438.478 131.502C438.478 210.03 360.696 335.555 282.013 335.555C203.331 335.555 44.0672 132.7 44.0672 54.1709C39.7951 -117.208 214.002 -82.9768 296.01 -10.6871C374.693 -10.6871 438.478 52.9729 438.478 131.502Z"
                fill="#FFFED4"
              />
              <path
                d="M115.974 -51.0415C-20.8891 246.281 390.14 379.648 410.121 255.406"
                stroke="#D4FFDC"
                strokeWidth="4"
              />
              <path
                d="M165.962 -30.0874C-41.0122 178.443 380.367 329.049 385.419 198.546"
                stroke="#D4FFDC"
                strokeWidth="3"
              />
              <path
                d="M159.964 -6.13977C83.0932 176.225 356.515 312.408 355.893 197.983"
                stroke="#D4FFDC"
                strokeWidth="2"
              />
              <path
                d="M168.962 -8.13544C112.181 121.092 319.336 229.115 352.135 182.697"
                stroke="#D4FFDC"
                strokeWidth="2"
              />
              <path
                d="M183.958 -5.14197C165.347 71.8308 342.981 189.479 355.021 173.074"
                stroke="#D4FFDC"
                strokeWidth="4"
              />
              <path
                d="M202.954 -13.1245C198.88 44.6764 351.677 160.456 358.775 149.212"
                stroke="#D4FFDC"
                strokeWidth="3"
              />
              <path
                d="M264.94 -17.1158C219.401 58.3447 340.051 98.0579 357.21 79.0123"
                stroke="#D4FFDC"
                strokeWidth="2"
              />
            </svg>
          </div>
        </header>
        {children}
        <footer className="bottom-0">
          <svg
            className="w-full lg:w-auto"
            width="611"
            height="238"
            viewBox="0 0 611 238"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M611 251.5C611 414.148 429.957 575 235 575C40.0435 575 -123 439.148 -123 276.5C-123 113.852 53.5435 0 248.5 0C416.06 0 494.06 192.5 611 251.5Z"
              fill="#FFDFCC"
            />
          </svg>
        </footer>
      </body>
    </html>
  );
}
