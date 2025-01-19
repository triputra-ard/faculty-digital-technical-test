<template>
  <header class="hidden">
    <div class="bg-black">
      <marquee class="topbar-marquee" behavior="scroll" direction="left">
        <div class="flex flex-nowrap flex-row items-center">
          <template v-for="marquee in 5">
            <p class="marquee-text">
              Bukit Merah Family Store is open! Visit Us from Monday-Saturday
              9am - 6pm
            </p>
          </template>
        </div>
      </marquee>
    </div>
    <nav class="navigation-bar bg-white text-black">
      <div class="navigation-bar-content">
        <a href="/" class="brand me-[0.5rem]">
          <img
            class="brand-image"
            src="~/assets/icons/renue_logo.png"
            alt="Re:Nue brand logo with color black and red"
          />
        </a>
        <ul class="navigation-menu-list mx-auto">
          <template
            v-for="(menu, index) in webContent.getNavigationMenu"
            :key="index"
          >
            <template v-if="Object.hasOwn(menu, 'children')">
              <li
                class="navigation-menu-item dropdown-menu"
                aria-open="false"
                :ref="`dropdownMenu${index}`"
                @mouseleave="hideDropdown($refs[`dropdownMenu${index}`][0])"
                @mouseover="showDropdown($refs[`dropdownMenu${index}`][0])"
              >
                <a class="navigation-menu-link dropdown-toggle" :href="menu.url"
                  >{{ menu.title }}
                  <icon class="caret" icon="mdi-chevron-down"></icon>
                </a>
                <ul class="dropdown-content shadow-lg">
                  <template
                    v-for="(child, childIndex) in menu.children"
                    :key="childIndex"
                  >
                    <li class="dropdown-content-item font-semibold">
                      {{ child.title }}
                    </li>
                  </template>
                </ul>
              </li>
            </template>
            <template v-else>
              <li class="navigation-menu-item">
                <a class="navigation-menu-link" :href="menu.url">{{
                  menu.title
                }}</a>
              </li>
            </template>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script lang="ts" src="./NavigationBar.ts"></script>
<style lang="scss" src="./NavigationBar.scss"></style>
