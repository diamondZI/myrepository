// 根据角色动态生成路由
import type { MockMethod } from "vite-plugin-mock";


export default [
  {
    url: "/api/login",
    method: "post",
    response: ({ body }:{body:{username:string,password:string}}) => {
      if (body.username === "admin") {
        return {
          success: true,
          data: {
            username: "admin",
            // 一个用户可能有多个角色
            roles: ["admin"],
            accessToken: "eyJhbGciOiJIUzUxMiJ9.admin",
            refreshToken: "eyJhbGciOiJIUzUxMiJ9.adminRefresh",
            expires: "2023/10/30 00:00:00"
          }
        };
      }else if(body.username === "employee"){
         return {
          success: true,
          data: {
            username: "employee",
            // 一个用户可能有多个角色
            roles: ["employee","common"],
            accessToken: "eyJhbGciOiJIUzUxMiJ9.employee",
            refreshToken: "eyJhbGciOiJIUzUxMiJ9.employee",
            expires: "2023/10/30 00:00:00"
          }
        };
      } else {
        return {
          success: true,
          data: {
            username: "common",
            // 一个用户可能有多个角色
            roles: ["common"],
            accessToken: "eyJhbGciOiJIUzUxMiJ9.common",
            refreshToken: "eyJhbGciOiJIUzUxMiJ9.commonRefresh",
            expires: "2023/10/30 00:00:00"
          }
        };
      }
    }
  }
] as MockMethod[];
