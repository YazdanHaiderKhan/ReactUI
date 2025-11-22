import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      id: 0,
      img: "https://plus.unsplash.com/premium_photo-1661575258771-2899b67898ba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Prime customers, that have access to bank credit and are satisfied with the current product",
      tag: "Satisfied",
      color: "#4a6ffe",
      textColor: "#ffffff",
    },
    {
      id: 1,
      img: "https://plus.unsplash.com/premium_photo-1663011265945-140e97ec8a2f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Prime customers, that have access to bank credit and are not satisfied with the current service",
      tag: "Underserved",
      color: "#4a6ffe",
      textColor: "#ffffff",
    },
    {
      id: 2,
      img: "https://plus.unsplash.com/premium_photo-1664476746877-ca6170eb1997?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Customers from near-prime and sub-prime segments with no access to bank credit",
      tag: "Underbanked",
      color: "#c8f55a",
      textColor: "#000000",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Customers from near-prime and sub-prime segments with no access to bank credit",
      tag: "Underbanked",
      color: "#c8f55a",
      textColor: "#000000",
    },
    {
      id: 4,
      img: "https://plus.unsplash.com/premium_photo-1661281292577-27c65307ac42?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Customers from near-prime and sub-prime segments with no access to bank credit",
      tag: "Corrupted",
      color: "#4a6ffe",
      textColor: "#ffffff",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
