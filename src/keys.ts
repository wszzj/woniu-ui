import { InjectionKey, Ref } from "vue";

export const asideVisibleKey = Symbol() as InjectionKey<Ref<boolean>>;
export const toggleAsideKey = Symbol() as InjectionKey<() => void>;
export const themeKey = Symbol() as InjectionKey<Ref<string>>;
export const toggleThemeKey = Symbol() as InjectionKey<() => void>;
