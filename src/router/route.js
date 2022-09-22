import MainLayout from "../../layout/main/MainLayout.vue";
import MainPage from "../pages/MainPage.vue";

const routes = [
    {
        path: "/",
        component: MainLayout,
        children: [
            {
                path: "/",
                name: "테스트 메인 페이지",
                component: MainPage
            }
        ]
    }
];

export default routes;
