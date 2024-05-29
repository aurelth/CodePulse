"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./core/components/navbar/navbar.component");
var category_list_component_1 = require("./features/category/category-list/category-list.component");
var add_category_component_1 = require("./features/category/add-category/add-category.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var edit_category_component_1 = require("./features/category/edit-category/edit-category.component");
var blogpost_list_component_1 = require("./features/blog-post/blogpost-list/blogpost-list.component");
var add_blogpost_component_1 = require("./features/blog-post/add-blogpost/add-blogpost.component");
var edit_blogpost_component_1 = require("./features/blog-post/edit-blogpost/edit-blogpost.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                category_list_component_1.CategoryListComponent,
                add_category_component_1.AddCategoryComponent,
                edit_category_component_1.EditCategoryComponent,
                blogpost_list_component_1.BlogpostListComponent,
                add_blogpost_component_1.AddBlogpostComponent,
                edit_blogpost_component_1.EditBlogpostComponent,
            ],
            imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, forms_1.FormsModule, http_1.HttpClientModule, common_1.CommonModule],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
