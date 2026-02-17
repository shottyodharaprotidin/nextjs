import Footertwo from "./footer-two";
import HeaderTwo from "./header-two";




export default function LayoutTwo({ children }) {
  return (
   <>
      <HeaderTwo/>
       {children}
      <Footertwo/>
   </>

  );
}