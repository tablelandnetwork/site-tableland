import Vue from "vue";
import Router from "vue-router";
import IPhone1313Pro2 from "./components/IPhone1313Pro2";
import IPhone1313Pro3 from "./components/IPhone1313Pro3";
import Desktop from "./components/Desktop";
import { iPhone1313Pro2Data, iPhone1313Pro3Data, conceptHierarchyAndContentIterationData } from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/iphone-13-13-pro-2",
      component: IPhone1313Pro2,
      props: { ...iPhone1313Pro2Data },
    },
    {
      path: "/iphone-13-13-pro-3",
      component: IPhone1313Pro3,
      props: {
        time: "9:41",
        text2: "􀎡",
        domain: "tableland.io",
        property2regular3Props: iPhone1313Pro3Data.property2regular3Props,
        property2regular32Props: iPhone1313Pro3Data.property2regular32Props,
        property2regular33Props: iPhone1313Pro3Data.property2regular33Props,
        property1regular3Props: iPhone1313Pro3Data.property1regular3Props,
      },
    },
    {
      path: "*",
      component: Desktop,
      props: { ...conceptHierarchyAndContentIterationData },
    },
  ],
});
