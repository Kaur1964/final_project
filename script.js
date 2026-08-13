/**
 * Plant Palette — menu filtering
 * Filters dish cards by meal category (Breakfast/Lunch/Dinner) and by
 * dietary tag (All/Vegan/Gluten-Free/Nut-Free).
 */
(function () {
  "use strict";
 
  document.addEventListener("DOMContentLoaded", function () {
    var categoryButtons = document.querySelectorAll("[data-category-filter]");
    var dietButtons = document.querySelectorAll("[data-diet-filter]");
    var dishes = document.querySelectorAll("[data-category][data-diet]");
 
    if (!dishes.length) {
      return;
    }
 
    var activeCategory = "breakfast";
    var activeDiet = "all";
 
    function applyFilters() {
      dishes.forEach(function (dish) {
        var matchesCategory = dish.getAttribute("data-category") === activeCategory;
        var diets = (dish.getAttribute("data-diet") || "").split(" ");
        var matchesDiet = activeDiet === "all" || diets.indexOf(activeDiet) !== -1;
 
        var col = dish.closest(".pp-dish-col") || dish;
        if (matchesCategory && matchesDiet) {
          col.classList.remove("d-none");
        } else {
          col.classList.add("d-none");
        }
      });
    }
 
    categoryButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        categoryButtons.forEach(function (b) {
          b.classList.remove("active");
          b.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
        activeCategory = btn.getAttribute("data-category-filter");
        applyFilters();
      });
    });
 
    dietButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        dietButtons.forEach(function (b) {
          b.classList.remove("active");
          b.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
        activeDiet = btn.getAttribute("data-diet-filter");
        applyFilters();
      });
    });
 
    applyFilters();
  });
})();
 
