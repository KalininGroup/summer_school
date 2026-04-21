---
title: Summer School Registration
menu_title: Registration
menu_icon: clipboard-check
event_status:
 - open
---

<style>
  .reg-card {
    max-width: 760px;
    margin: 1.5rem auto;
    padding: 1.6rem 1.9rem;
    background: #ffffff;
    border: 1px solid #e6e6e6;
    border-radius: 14px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.05);
  }

  .reg-card h2 {
    margin: 0 0 1rem 0;
    font-size: 1.6rem;
    font-weight: 700;
    text-align: center;
  }

  .utk-info {
    margin: 1.5rem 0;
    padding: 1rem 1.2rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: #fafafa;
  }
  .utk-info summary {
    cursor: pointer;
    font-size: 1.05rem;
  }

  .utk-info code:hover {
    background: #e6e6e6;
  }    

  .copy-email {
    cursor: pointer;
    padding: 2px 4px;
    background: #f0f0f0;
    border-radius: 4px;
    position: relative;
  }

  .copy-email:hover {
    background: #e6e6e6;
  }
  
  /* Tooltip styling */
  .copied-tooltip {
    position: absolute;
    top: -28px;
    left: 50%;
    transform: translateX(-50%);
    background: #333;
    color: #fff;
    padding: 3px 8px;
    font-size: 0.75rem;
    border-radius: 4px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-out;
    white-space: nowrap;
  }

</style>

<script>
function showCopiedTooltip(event) {
  const el = event.target;

  // Create tooltip
  const tooltip = document.createElement('div');
  tooltip.className = 'copied-tooltip';
  tooltip.textContent = 'Copied!';
  el.appendChild(tooltip);

  // Fade in
  requestAnimationFrame(() => {
    tooltip.style.opacity = '1';
  });

  // Remove after 1 second
  setTimeout(() => {
    tooltip.style.opacity = '0';
    setTimeout(() => tooltip.remove(), 200);
  }, 1000);
}
</script>

Please complete the form below to register for the **Summer School on ML for EM**.

<details class="utk-info">
  <summary><strong>Important Information for UTK Students (3‑CH Option)</strong></summary>
  <p>
    UTK students may enroll in <strong>MSE 676 – Special Topic: ML/AI for Electron Microscopy (3 credit hours)</strong>, which is linked to the one‑week Summer School held June 22–26, 2026. Because the workshop occurs <strong>after the add/drop deadline</strong>, students <strong>cannot drop the course once the workshop begins</strong>.
  </p>
  <p>
    Registration for the course requires <strong>instructor consent</strong>. Please email Prof. Gerd Duscher: 
    <code class="copy-email"
      onclick="navigator.clipboard.writeText('gduscher@utk.edu'); showCopiedTooltip(event);">
      gduscher@utk.edu
    </code>
  </p>
</details>

<div class="reg-card"> 
  <iframe    src="https://docs.google.com/forms/d/e/1FAIpQLScWmn_l6OW9iWh7KApeOGABen91gt8_nq_MpcMD97Isku7ngg/viewform?embedded=true"
    width="100%"
    height="1500"
    frameborder="0"
    marginheight="0"
    marginwidth="0">
    Loading…
  </iframe>
</div>
