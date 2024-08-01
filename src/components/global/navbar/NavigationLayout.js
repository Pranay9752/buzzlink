import React from "react";
import BottomNavigation from "./bottom-navigation";
import TopNavigation from "./top-navigation";

function NavigationLayout({ children, bottomItems, topItems }) {
  return (
    <div className="w-full h-full">
      <TopNavigation items={topItems} />
      {children}
      <BottomNavigation items={bottomItems} />
    </div>
  );
}

export default NavigationLayout;
