import Dialog from "@/lib/Dialog.vue";
import Button from "@/lib/Button.vue";
import {
  __VLS_internalComponent,
  __VLS_componentsOption,
  __VLS_name,
  toggle,
  visible,
  cancel,
  confirm,
} from "./DialogDemo.vue";

function __VLS_template() {
  let __VLS_ctx!: InstanceType<
    __VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>
  > & {};
  /* Components */
  let __VLS_otherComponents!: NonNullable<
    typeof __VLS_internalComponent extends { components: infer C } ? C : {}
  > &
    typeof __VLS_componentsOption;
  let __VLS_own!: __VLS_SelfComponent<
    typeof __VLS_name,
    typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots })
  >;
  let __VLS_localComponents!: typeof __VLS_otherComponents &
    Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
  let __VLS_components!: typeof __VLS_localComponents &
    __VLS_GlobalComponents &
    typeof __VLS_ctx;
  /* Style Scoped */
  type __VLS_StyleScopedClasses = {};
  let __VLS_styleScopedClasses!:
    | __VLS_StyleScopedClasses
    | keyof __VLS_StyleScopedClasses
    | (keyof __VLS_StyleScopedClasses)[];
  /* CSS variable injection */
  /* CSS variable injection end */
  let __VLS_resolvedLocalAndGlobalComponents!: {} & __VLS_WithComponent<
    "Button",
    typeof __VLS_localComponents,
    "Button",
    "Button",
    "Button"
  > &
    __VLS_WithComponent<
      "Dialog",
      typeof __VLS_localComponents,
      "Dialog",
      "Dialog",
      "Dialog"
    >;
  __VLS_intrinsicElements.div;
  __VLS_intrinsicElements.div;
  __VLS_intrinsicElements.h1;
  __VLS_intrinsicElements.h1;
  __VLS_components.Button;
  __VLS_components.Button;
  // @ts-ignore
  [Button, Button];
  __VLS_components.Dialog;
  __VLS_components.Dialog;
  // @ts-ignore
  [Dialog, Dialog];
  __VLS_intrinsicElements.template;
  __VLS_intrinsicElements.template;
  __VLS_intrinsicElements.template;
  __VLS_intrinsicElements.template;
  __VLS_intrinsicElements.h2;
  __VLS_intrinsicElements.h2;
  __VLS_intrinsicElements.p;
  __VLS_intrinsicElements.p;
  __VLS_intrinsicElements.p;
  __VLS_intrinsicElements.p;
  __VLS_intrinsicElements.p;
  __VLS_intrinsicElements.p;
  {
    const __VLS_0 = __VLS_intrinsicElements["div"];
    const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
    const __VLS_2 = __VLS_1(
      { ...{} },
      ...__VLS_functionalComponentArgsRest(__VLS_1)
    );
    (
      ({}) as (
        props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> &
          Record<string, unknown>
      ) => void
    )({ ...{} });
    const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
    let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
    __VLS_3.slots!.default;
  }
  {
    const __VLS_5 = __VLS_intrinsicElements["h1"];
    const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
    const __VLS_7 = __VLS_6(
      { ...{} },
      ...__VLS_functionalComponentArgsRest(__VLS_6)
    );
    (
      ({}) as (
        props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> &
          Record<string, unknown>
      ) => void
    )({ ...{} });
    const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
    let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
    __VLS_8.slots!.default;
  }
  {
    const __VLS_10 = (
      {} as "Button" extends keyof typeof __VLS_ctx
        ? { Button: typeof __VLS_ctx.Button }
        : typeof __VLS_resolvedLocalAndGlobalComponents
    ).Button;
    const __VLS_11 = __VLS_asFunctionalComponent(
      __VLS_10,
      new __VLS_10({ ...{ onClick: {} as any }, level: "primary" })
    );
    (({}) as { Button: typeof __VLS_10 }).Button;
    (({}) as { Button: typeof __VLS_10 }).Button;
    const __VLS_12 = __VLS_11(
      { ...{ onClick: {} as any }, level: "primary" },
      ...__VLS_functionalComponentArgsRest(__VLS_11)
    );
    (
      ({}) as (
        props: __VLS_FunctionalComponentProps<
          typeof __VLS_10,
          typeof __VLS_12
        > &
          Record<string, unknown>
      ) => void
    )({ ...{ onClick: {} as any }, level: "primary" });
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
    let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
    let __VLS_15 = {
      click: __VLS_pickEvent(
        __VLS_14["click"],
        ({} as __VLS_FunctionalComponentProps<typeof __VLS_11, typeof __VLS_12>)
          .onClick
      ),
    };
    __VLS_15 = { click: __VLS_ctx.toggle };
    __VLS_13.slots!.default;
  }
  {
    const __VLS_16 = (
      {} as "Dialog" extends keyof typeof __VLS_ctx
        ? { Dialog: typeof __VLS_ctx.Dialog }
        : typeof __VLS_resolvedLocalAndGlobalComponents
    ).Dialog;
    const __VLS_17 = __VLS_asFunctionalComponent(
      __VLS_16,
      new __VLS_16({
        ...{},
        visible: __VLS_ctx.visible,
        closeOnClickOverlay: false,
        cancel: __VLS_ctx.cancel,
        confirm: __VLS_ctx.confirm,
      })
    );
    (({}) as { Dialog: typeof __VLS_16 }).Dialog;
    (({}) as { Dialog: typeof __VLS_16 }).Dialog;
    const __VLS_18 = __VLS_17(
      {
        ...{},
        visible: __VLS_ctx.visible,
        closeOnClickOverlay: false,
        cancel: __VLS_ctx.cancel,
        confirm: __VLS_ctx.confirm,
      },
      ...__VLS_functionalComponentArgsRest(__VLS_17)
    );
    (
      ({}) as (
        props: __VLS_FunctionalComponentProps<
          typeof __VLS_16,
          typeof __VLS_18
        > &
          Record<string, unknown>
      ) => void
    )({
      ...{},
      visible: __VLS_ctx.visible,
      closeOnClickOverlay: false,
      cancel: __VLS_ctx.cancel,
      confirm: __VLS_ctx.confirm,
    });
    const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18)!;
    let __VLS_20!: __VLS_NormalizeEmits<typeof __VLS_19.emit>;
    {
      const __VLS_21 = __VLS_intrinsicElements["template"];
      const __VLS_22 = __VLS_elementAsFunctionalComponent(__VLS_21);
      const __VLS_23 = __VLS_22(
        { ...{} },
        ...__VLS_functionalComponentArgsRest(__VLS_22)
      );
      (
        ({}) as (
          props: __VLS_FunctionalComponentProps<
            typeof __VLS_21,
            typeof __VLS_23
          > &
            Record<string, unknown>
        ) => void
      )({ ...{} });
      {
        __VLS_19.slots!.title;
        {
          const __VLS_24 = __VLS_intrinsicElements["h2"];
          const __VLS_25 = __VLS_elementAsFunctionalComponent(__VLS_24);
          const __VLS_26 = __VLS_25(
            { ...{} },
            ...__VLS_functionalComponentArgsRest(__VLS_25)
          );
          (
            ({}) as (
              props: __VLS_FunctionalComponentProps<
                typeof __VLS_24,
                typeof __VLS_26
              > &
                Record<string, unknown>
            ) => void
          )({ ...{} });
          const __VLS_27 = __VLS_pickFunctionalComponentCtx(
            __VLS_24,
            __VLS_26
          )!;
          let __VLS_28!: __VLS_NormalizeEmits<typeof __VLS_27.emit>;
          __VLS_27.slots!.default;
        }
        // @ts-ignore
        [
          toggle,
          visible,
          cancel,
          confirm,
          visible,
          cancel,
          confirm,
          visible,
          cancel,
          confirm,
        ];
      }
    }
    {
      const __VLS_29 = __VLS_intrinsicElements["template"];
      const __VLS_30 = __VLS_elementAsFunctionalComponent(__VLS_29);
      const __VLS_31 = __VLS_30(
        { ...{} },
        ...__VLS_functionalComponentArgsRest(__VLS_30)
      );
      (
        ({}) as (
          props: __VLS_FunctionalComponentProps<
            typeof __VLS_29,
            typeof __VLS_31
          > &
            Record<string, unknown>
        ) => void
      )({ ...{} });
      {
        __VLS_19.slots!.content;
        {
          const __VLS_32 = __VLS_intrinsicElements["p"];
          const __VLS_33 = __VLS_elementAsFunctionalComponent(__VLS_32);
          const __VLS_34 = __VLS_33(
            { ...{} },
            ...__VLS_functionalComponentArgsRest(__VLS_33)
          );
          (
            ({}) as (
              props: __VLS_FunctionalComponentProps<
                typeof __VLS_32,
                typeof __VLS_34
              > &
                Record<string, unknown>
            ) => void
          )({ ...{} });
          const __VLS_35 = __VLS_pickFunctionalComponentCtx(
            __VLS_32,
            __VLS_34
          )!;
          let __VLS_36!: __VLS_NormalizeEmits<typeof __VLS_35.emit>;
          __VLS_35.slots!.default;
        }
        {
          const __VLS_37 = __VLS_intrinsicElements["p"];
          const __VLS_38 = __VLS_elementAsFunctionalComponent(__VLS_37);
          const __VLS_39 = __VLS_38(
            { ...{} },
            ...__VLS_functionalComponentArgsRest(__VLS_38)
          );
          (
            ({}) as (
              props: __VLS_FunctionalComponentProps<
                typeof __VLS_37,
                typeof __VLS_39
              > &
                Record<string, unknown>
            ) => void
          )({ ...{} });
          const __VLS_40 = __VLS_pickFunctionalComponentCtx(
            __VLS_37,
            __VLS_39
          )!;
          let __VLS_41!: __VLS_NormalizeEmits<typeof __VLS_40.emit>;
          __VLS_40.slots!.default;
        }
        {
          const __VLS_42 = __VLS_intrinsicElements["p"];
          const __VLS_43 = __VLS_elementAsFunctionalComponent(__VLS_42);
          const __VLS_44 = __VLS_43(
            { ...{} },
            ...__VLS_functionalComponentArgsRest(__VLS_43)
          );
          (
            ({}) as (
              props: __VLS_FunctionalComponentProps<
                typeof __VLS_42,
                typeof __VLS_44
              > &
                Record<string, unknown>
            ) => void
          )({ ...{} });
          const __VLS_45 = __VLS_pickFunctionalComponentCtx(
            __VLS_42,
            __VLS_44
          )!;
          let __VLS_46!: __VLS_NormalizeEmits<typeof __VLS_45.emit>;
          __VLS_45.slots!.default;
        }
      }
    }
  }
  if (
    typeof __VLS_styleScopedClasses === "object" &&
    !Array.isArray(__VLS_styleScopedClasses)
  ) {
  }
  var __VLS_slots!: {};
  return __VLS_slots;
}
