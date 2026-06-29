<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { TextStyle } from './textStyle';

  export let style: TextStyle;
  export let x: number;
  export let y: number;

  const dispatch = createEventDispatcher<{
    change: TextStyle;
    delete: void;
  }>();

  const BG_COLORS = [
    { value: 'transparent', label: 'None',    textColor: null },
    { value: '#ffff00',     label: 'Yellow',  textColor: '#000000' },
    { value: '#00ff00',     label: 'Green',   textColor: '#000000' },
    { value: '#00ffff',     label: 'Cyan',    textColor: '#000000' },
    { value: '#ff00ff',     label: 'Magenta', textColor: '#ffffff' },
    { value: '#ffffff',     label: 'White',   textColor: '#000000' },
    { value: '#000000',     label: 'Black',   textColor: '#ffffff' },
  ];

  let showBgPicker = false;

  const emit = (patch: Partial<TextStyle>) =>
    dispatch('change', { ...style, ...patch });

  const changeFontSize = (delta: number) =>
    emit({ fontSize: Math.max(8, Math.min(72, style.fontSize + delta)) });

  const toggleBold      = () => emit({ bold: !style.bold });
  const toggleItalic    = () => emit({ italic: !style.italic });
  const toggleUnderline = () => emit({ underline: !style.underline });

  const pickBgColor = (value: string) => {
    emit({ bgColor: value });
    showBgPicker = false;
  };

  // Prevent toolbar mouse-down from stealing focus from the textarea
  const onMouseDown = (e: MouseEvent) => e.preventDefault();
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="a9s-tools-text-toolbar"
  style="left:{x}px; top:{y}px;"
  on:mousedown={onMouseDown}>

  <button class="tb-btn" title="Decrease font size" on:click={() => changeFontSize(-2)}>A-</button>
  <button class="tb-btn" title="Increase font size" on:click={() => changeFontSize(2)}>A+</button>

  <div class="tb-divider" />

  <button class="tb-btn" class:active={style.bold}      title="Bold"      on:click={toggleBold}>
    <strong>B</strong>
  </button>
  <button class="tb-btn" class:active={style.italic}    title="Italic"    on:click={toggleItalic}>
    <em>I</em>
  </button>
  <button class="tb-btn" class:active={style.underline} title="Underline" on:click={toggleUnderline}>
    <u>U</u>
  </button>

  <div class="tb-divider" />

  <!-- Background colour -->
  <div class="tb-color-wrap">
    <button class="tb-btn tb-color-btn" title="Highlight colour" on:click={() => showBgPicker = !showBgPicker}>
      <span
        class="tb-color-letter"
        style="background:{style.bgColor && style.bgColor !== 'transparent' ? style.bgColor : '#AAAFC3'}; color:{BG_COLORS.find(c => c.value === style.bgColor)?.textColor ?? '#ffffff'};">
        A
      </span>
    </button>

    {#if showBgPicker}
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="tb-color-picker" on:mousedown={onMouseDown}>
        {#each BG_COLORS as c}
          <button
            class="tb-swatch"
            class:selected={style.bgColor === c.value}
            title={c.label}
            style="background:{c.value !== 'transparent' ? c.value : 'var(--checker)'};"
            on:click={() => pickBgColor(c.value)} />
        {/each}
      </div>
    {/if}
  </div>

  <div class="tb-divider" />

  <button class="tb-btn tb-delete" title="Delete" on:click={() => dispatch('delete')}>
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
    </svg>
  </button>
</div>

<style>
  .a9s-tools-text-toolbar {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 4px 6px;
    background: #232323;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.35);
    z-index: 1001;
    pointer-events: all;
    transform: translateY(-100%);
    margin-top: -6px;
  }

  .tb-btn {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    color: #AAAFC3;
    font-size: 13px;
    padding: 0;
  }

  .tb-btn:hover  { background: #3a3a3a; }
  .tb-btn.active { background: #ff00ba; color: #fff; }

  .tb-divider {
    width: 1px;
    height: 18px;
    background: #444;
    margin: 0 3px;
    flex-shrink: 0;
  }

  /* Colour button */
  .tb-color-wrap { position: relative; }

  .tb-color-btn { width: auto; padding: 2px 3px; }

  .tb-color-letter {
    font-size: 14px;
    font-weight: bold;
    line-height: 1;
    padding: 0 4px;
    border-radius: 3px;
  }

  .tb-color-picker {
    position: absolute;
    top: calc(100% + 4px);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 4px;
    padding: 6px;
    background: #232323;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.35);
    z-index: 1002;
  }

  .tb-swatch {
    width: 20px;
    height: 20px;
    border-radius: 2px;
    border: 1px solid #666;
    cursor: pointer;
    padding: 0;
    /* checker pattern for "transparent" swatch */
    --checker: repeating-conic-gradient(#aaa 0% 25%, #fff 0% 50%) 0 0 / 8px 8px;
  }

  .tb-swatch.selected { border: 2px solid #ff00ba; }
</style>
