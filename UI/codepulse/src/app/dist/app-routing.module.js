"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var category_list_component_1 = require("./features/category/category-list/category-list.component");
var add_category_component_1 = require("./features/category/add-category/add-category.component");
var edit_category_component_1 = require("./features/category/edit-category/edit-category.component");
var blogpost_list_component_1 = require("./features/blog-post/blogpost-list/blogpost-list.component");
var add_blogpost_component_1 = require("./features/blog-post/add-blogpost/add-blogpost.component");
var edit_blogpost_component_1 = require("./features/blog-post/edit-blogpost/edit-blogpost.component");
var routes = [
    { path: 'admin/categories', component: category_list_component_1.CategoryListComponent },
    { path: 'admin/categories/add', component: add_category_component_1.AddCategoryComponent },
    { path: 'admin/categories/:id', component: edit_category_component_1.EditCategoryComponent },
    { path: 'admin/blogposts', component: blogpost_list_component_1.BlogpostListComponent },
    { path: 'admin/blogposts/add', component: add_blogpost_component_1.AddBlogpostComponent },
    { path: 'admin/blogposts/:id', component: edit_blogpost_component_1.EditBlogpostComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
