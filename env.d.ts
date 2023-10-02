/// <reference types="vite/client" />


import type {RouteComponent,} from 'vue-router';
declare global {
  interface RouterType{

    path: string;
    name?: string;
    /** `Layout`组件 `可选` */
    component?: RouteComponent;
    /** 路由重定向 `可选` */
    redirect?: string;
    meta?: {
      /** 菜单名称（兼容国际化、非国际化，如何用国际化的写法就必须在根目录的`locales`文件夹下对应添加）`必填` */
      title?: string;
      /** 菜单图标 `可选` */
      icon?: any
      /** 是否在菜单中显示（默认`true`）`可选` */
      showLink?: boolean;
      role:string[]
      /** 菜单升序排序，值越高排的越后（只针对顶级路由）`可选` */
      rank?: number;
    };
    /** 子路由配置项 */
    children?: Array<RouterType>;
  
  }
}
declare module 'captcha-mini'
