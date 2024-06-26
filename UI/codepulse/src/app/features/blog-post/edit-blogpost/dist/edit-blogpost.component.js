"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EditBlogpostComponent = void 0;
var core_1 = require("@angular/core");
var EditBlogpostComponent = /** @class */ (function () {
    function EditBlogpostComponent(route, blogPostService, categoryService) {
        this.route = route;
        this.blogPostService = blogPostService;
        this.categoryService = categoryService;
        this.id = null;
    }
    EditBlogpostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categories$ = this.categoryService.getAllCategories();
        this.routeSubscription = this.route.paramMap.subscribe({
            next: function (params) {
                _this.id = params.get('id');
                if (_this.id)
                    _this.blogPostService.getBlogPostById(_this.id).subscribe({
                        next: function (response) {
                            _this.model = response;
                            _this.selectedCategories = response.categories.map(function (x) { return x.id; });
                        }
                    });
            }
        });
    };
    EditBlogpostComponent.prototype.onFormSubmit = function () { };
    EditBlogpostComponent.prototype.ngOnDestroy = function () {
        var _a;
        (_a = this.routeSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    };
    EditBlogpostComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-blogpost',
            templateUrl: './edit-blogpost.component.html',
            styleUrls: ['./edit-blogpost.component.css']
        })
    ], EditBlogpostComponent);
    return EditBlogpostComponent;
}());
exports.EditBlogpostComponent = EditBlogpostComponent;
