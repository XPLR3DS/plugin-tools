<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import {
    type ShapeStyle,
    type DefaultShapeStyle,
    STROKE_COLORS,
    FILL_COLORS,
    STROKE_WIDTHS,
    FILL_OPACITIES,
  } from './shapeStyle';

  /** Effective style (defaults merged with the annotation's own overrides). */
  export let style: Required<ShapeStyle>;
  /** Global defaults — used to decide what a change event should contain. */
  export let defaultStyle: DefaultShapeStyle;
  /** Whether the shape can carry a fill (rect / polygon / ellipse / closed path). */
  export let fillable = false;
  export let x: number;
  export let y: number;

  const dispatch = createEventDispatcher<{
    change: ShapeStyle;
    delete: void;
  }>();

  let openPicker: 'stroke' | 'width' | 'fill' | 'opacity' | null = null;

  const toggle = (picker: typeof openPicker) =>
    (openPicker = openPicker === picker ? null : picker);

  const emit = (patch: ShapeStyle) => {
    dispatch('change', patch);
    openPicker = null;
  };

  // Suppress `defaultStyle` unused warning — kept in the public API so hosts
  // can later diff changes against defaults if needed.
  $: void defaultStyle;

  // Prevent toolbar mouse-down from clearing the canvas selection
  const onMouseDown = (e: MouseEvent) => e.preventDefault();
</script>

<!-- svelte-ignore a11y-no-static-element-interactions a11y-click-events-have-key-events -->
<div
  class="a9s-tools-shape-toolbar"
  style="left:{x}px; top:{y}px;"
  on:mousedown={onMouseDown}
  on:click|stopPropagation>

  <!-- Stroke colour -->
  <div class="tb-picker-wrap">
    <button class="tb-btn tb-color-btn" title="Stroke colour" on:click={() => toggle('stroke')}>
      <svg width="14" height="14" viewBox="0 0 14 14">
        <line x1="2" y1="12" x2="12" y2="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      </svg>
      <span class="tb-color-swatch" style="background:{style.strokeColor};" />
    </button>

    {#if openPicker === 'stroke'}
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="tb-popup" on:mousedown={onMouseDown}>
        {#each STROKE_COLORS as c}
          <button
            class="tb-swatch"
            class:selected={style.strokeColor === c.value}
            title={c.label}
            style="background:{c.value};"
            on:click={() => emit({ strokeColor: c.value })} />
        {/each}
      </div>
    {/if}
  </div>

  <!-- Stroke width -->
  <div class="tb-picker-wrap">
    <button class="tb-btn tb-width-btn" title="Stroke width" on:click={() => toggle('width')}>
      <svg width="16" height="14" viewBox="0 0 16 14">
        <line x1="1" y1="3"  x2="15" y2="3"  stroke="currentColor" stroke-width="1" />
        <line x1="1" y1="7"  x2="15" y2="7"  stroke="currentColor" stroke-width="2" />
        <line x1="1" y1="12" x2="15" y2="12" stroke="currentColor" stroke-width="3.5" />
      </svg>
    </button>

    {#if openPicker === 'width'}
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="tb-popup tb-popup-col" on:mousedown={onMouseDown}>
        {#each STROKE_WIDTHS as w}
          <button
            class="tb-width-option"
            class:selected={style.strokeWidth === w}
            title="{w}px"
            on:click={() => emit({ strokeWidth: w })}>
            <span class="tb-width-bar" style="height:{Math.min(w, 8)}px;" />
          </button>
        {/each}
      </div>
    {/if}
  </div>

  {#if fillable}
    <div class="tb-divider" />

    <!-- Fill colour -->
    <div class="tb-picker-wrap">
      <button class="tb-btn tb-color-btn" title="Fill colour" on:click={() => toggle('fill')}>
        <svg width="14" height="14" viewBox="0 0 14 14">
          <rect x="2" y="2" width="10" height="10" rx="1.5" fill="currentColor" />
        </svg>
        <span
          class="tb-color-swatch"
          style="background:{style.fillColor !== 'none' && style.fillColor !== 'transparent' ? style.fillColor : 'transparent'}; border-color:#AAAFC3;" />
      </button>

      {#if openPicker === 'fill'}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="tb-popup" on:mousedown={onMouseDown}>
          {#each FILL_COLORS as c}
            <button
              class="tb-swatch"
              class:selected={style.fillColor === c.value}
              title={c.label}
              style="background:{c.value !== 'none' ? c.value : 'var(--checker)'};"
              on:click={() => emit({ fillColor: c.value })} />
          {/each}
        </div>
      {/if}
    </div>

    <!-- Fill opacity -->
    <div class="tb-picker-wrap">
      <button class="tb-btn tb-opacity-btn" title="Fill opacity" on:click={() => toggle('opacity')}>
        {Math.round(style.fillOpacity * 100)}%
      </button>

      {#if openPicker === 'opacity'}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="tb-popup tb-popup-col" on:mousedown={onMouseDown}>
          {#each FILL_OPACITIES as o}
            <button
              class="tb-opacity-option"
              class:selected={style.fillOpacity === o}
              on:click={() => emit({ fillOpacity: o })}>
              {Math.round(o * 100)}%
            </button>
          {/each}
        </div>
      {/if}
    </div>
  {/if}

  <div class="tb-divider" />

  <button class="tb-btn tb-delete" title="Delete" on:click={() => dispatch('delete')}>
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
    </svg>
  </button>
</div>

<style>
  .a9s-tools-shape-toolbar {
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
    margin-top: -8px;
  }

  .tb-btn {
    height: 24px;
    min-width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    color: #AAAFC3;
    font-size: 12px;
    padding: 0 2px;
  }

  .tb-btn:hover { background: #3a3a3a; }

  .tb-divider {
    width: 1px;
    height: 18px;
    background: #444;
    margin: 0 3px;
    flex-shrink: 0;
  }

  .tb-picker-wrap { position: relative; }

  .tb-color-btn {
    flex-direction: column;
    gap: 1px;
  }

  .tb-color-swatch {
    display: block;
    width: 14px;
    height: 3px;
    border-radius: 1px;
    border: 1px solid transparent;
  }

  .tb-popup {
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

  .tb-popup-col { flex-direction: column; }

  .tb-swatch {
    width: 20px;
    height: 20px;
    border-radius: 2px;
    border: 1px solid #666;
    cursor: pointer;
    padding: 0;
    /* checker pattern for the "none" swatch */
    --checker: repeating-conic-gradient(#aaa 0% 25%, #fff 0% 50%) 0 0 / 8px 8px;
  }

  .tb-swatch.selected { border: 2px solid #ff00ba; }

  .tb-width-option {
    width: 56px;
    height: 18px;
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    padding: 0 6px;
  }

  .tb-width-option:hover { background: #3a3a3a; }
  .tb-width-option.selected { background: #ff00ba; }

  .tb-width-bar {
    display: block;
    width: 100%;
    background: #AAAFC3;
    border-radius: 1px;
  }

  .tb-width-option.selected .tb-width-bar { background: #fff; }

  .tb-opacity-btn { font-weight: bold; }

  .tb-opacity-option {
    background: transparent;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    color: #AAAFC3;
    font-size: 12px;
    padding: 3px 8px;
  }

  .tb-opacity-option:hover { background: #3a3a3a; }
  .tb-opacity-option.selected { background: #ff00ba; color: #fff; }
</style>
