import { FC } from "react";
import { Header } from "./header/header";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer/footer";

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
