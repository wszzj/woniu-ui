import { InjectionKey, Ref } from "vue";

export const asideVisibleKey = Symbol() as InjectionKey<Ref<boolean>>;
export const toggleAsideKey = Symbol() as InjectionKey<() => void>;
