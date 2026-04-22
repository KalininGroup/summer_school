---
layout: page
title: 
menu_title: Home
menu_icon: house-door
---

<style>
/* MAIN TITLE */
.animated-title {
  font-size: 2.8rem;
  font-weight: 900;
  text-align: center;
  letter-spacing: -0.5px;

  /* Static warm orange gradient */
  background: linear-gradient(90deg, #ff7a18, #ffb347, #ff7a18);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: none;
}

/* SUBTITLES */
.subtitle {
  text-align: center;
  font-size: 1.7rem;
  font-weight: 600;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  letter-spacing: -0.3px;
}

/* Dates subtitle — UTK  orange */
.subtitle-dates {
  color: #CC6600;
}

/* Format subtitle — dark orange*/
.subtitle-format {
  color: #FF8200;
  margin-bottom: 1.2rem;
}

  .section-card {
  background: #fafbfd;
  border: 1px solid #e8ecf3;
  border-radius: 14px;
  padding: 20px 24px;
  margin: 40px auto;
  box-shadow: 0 1px 2px rgba(16,24,40,.04);
  max-width: 900px;
}
  .section-title {
  text-align: center;
  margin-bottom: 18px;
  font-size: 1.4rem;
  font-weight: 700;
  color: #1d2a56;
}

.institution-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin: 20px auto 40px;
  max-width: 900px;
}

.institution-card {
  background: #fafbfd;
  border: 1px solid #e8ecf3;
  border-radius: 14px;
  padding: 18px 14px;
  text-align: center;
  box-shadow: 0 1px 2px rgba(16,24,40,.04);
}

.institution-card img {
  max-width: 120px;
  max-height: 80px;
  width: auto;
  height: auto;
  margin-top: 10px;
  object-fit: contain;
  opacity: 0.95;
}

.institution-card p {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: #1d2a56;
}

/* Tutorials card layout */
.tutorials-card {
  padding: 20px 24px;
}

.tutorials-card h2 {
  text-align: center;
  margin-bottom: 18px;
  font-size: 1.4rem;
  font-weight: 700;
  color: #1d2a56;
}

.tutorials-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px 40px;
}

.tutorials-col p {
  margin: 6px 0;
  font-size: 1rem;
  color: #333;
  font-weight: 500;
}

.participation-card {
  padding: 20px 24px;
}

.participation-card h2 {
  text-align: center;
  margin-bottom: 18px;
  font-size: 1.4rem;
  font-weight: 700;
  color: #1d2a56;
}

.participation-card p {
  margin: 10px 0;
  font-size: 1rem;
  color: #333;
  line-height: 1.45;
}

.reg-link {
  color: #CC6600; /* UTK dark orange */
  font-weight: 600;
  text-decoration: none;
}

.reg-link:hover {
  text-decoration: underline;
}

  /* Mobile scaling */
@media (max-width: 700px) {
  .animated-title {
    font-size: 2rem;
  }
  .subtitle {
    font-size: 1.1rem;
  }
  .institution-grid {
    grid-template-columns: 1fr;
  }
  .tutorials-grid {
    grid-template-columns: 1fr;
  }
  .institution-card img {
    max-width: 110px;
    max-height: 70px;
  }
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

.utk-float-btn {
  position: fixed;
  bottom: 80px;
  right: 20px;

  /* Glacier glass effect */
  background: rgba(29, 29, 29, 0.55); /* same tone as your header */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  color: #cfcfcf !important; /* soft glacier text */
  padding: 10px 18px;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;

  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 4px 12px rgba(0,0,0,0.25);

  z-index: 999;
  transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
}

.utk-float-btn:hover {
  background: rgba(29, 29, 29, 0.75);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.35);
}

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

  const tooltip = document.createElement('div');
  tooltip.className = 'copied-tooltip';
  tooltip.textContent = 'Copied!';
  el.appendChild(tooltip);

  requestAnimationFrame(() => {
    tooltip.style.opacity = '1';
  });

  setTimeout(() => {
    tooltip.style.opacity = '0';
    setTimeout(() => tooltip.remove(), 200);
  }, 1000);
}
</script>


<h1 class="animated-title">
  4<sup>th</sup> School on ML/AI for Electron Microscopy
</h1>

<div class="subtitle subtitle-dates">
June 22-26, 2026 · Knoxville, Tennessee
</div>

<div class="subtitle subtitle-format">
  Hybrid format (online + in‑person)
</div>

**A focused, hands‑on program on machine learning for electron microscopy — from data analysis and real‑time analytics to autonomous instrument control. Hosted by the University of Tennessee, Knoxville, with collaboration with leading national laboratories and industry partners.**

<!-- Team Grid Wrapper -->
<h2 class="section-title">Organizing Team</h2>

<div class="team-grid">

  <!-- Kalinin -->
  <div class="team-card">
    <img src="{{ '/assets/kalinin.png' | relative_url }}" alt="Sergei V. Kalinin">
    <div class="team-meta">
      <div class="name">
        Sergei V. Kalinin
        <span class="socials">
            <!-- Website -->
            <a href="https://ae-spm.utk.edu/group-leader-pi/" target="_blank" rel="noopener" title="Website" aria-label="Website">
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2c.9 0 2.4 2.1 3 6H9c.6-3.9 2.1-6 3-6ZM5.06 11a7.8 7.8 0 0 1 .16-1h3.01a20 20 0 0 0 0 2H5.22a7.8 7.8 0 0 1-.16-1Zm6.94 9c-.9 0-2.4-2.1-3-6h6c-.6 3.9-2.1 6-3 6Zm3.77-7a20 20 0 0 0 0-2h3.01c.21.98.21 2.02 0 3H15.77ZM7.2 7H4.9a8 8 0 0 1 3.4-2.6c-.43.82-.8 1.7-1.1 2.6Zm9.6 0c-.3-.9-.67-1.78-1.1-2.6A8 8 0 0 1 19.1 7h-2.3ZM7.2 17c.3.9.67 1.78 1.1 2.6A8 8 0 0 1 4.9 17h2.3Zm9.6 0h2.3a8 8 0 0 1-3.4 2.6c.43-.82.8-1.7 1.1-2.6Z"/></svg>
            </a>
            <!-- GitHub -->
            <a href="https://github.com/SergeiVKalinin" target="_blank" rel="noopener" title="GitHub" aria-label="GitHub">
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.53-1.35-1.29-1.71-1.29-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.73 1.26 3.39.96.1-.76.41-1.26.74-1.55-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.47 5.92.42.36.79 1.07.79 2.16v3.2c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>
            </a>
            <!-- Google Scholar -->
            <a href="https://scholar.google.com/citations?hl=en&user=-cuxoSQAAAAJ" target="_blank" rel="noopener" title="Google Scholar" aria-label="Google Scholar">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13l-8-4.36v3.11L12 19l8-4.25v-3.11L12 16z"/>
</svg>
            </a>
          </span>
      </div>
      <div class="affil">
        University of Tennessee, Knoxville; Pacific Northwest National Laboratory
      </div>
      <!-- Description -->
      <p class="bio">
        Sergei V. Kalinin is a leading researcher at the intersection of machine learning, materials science, and electron microscopy, serving as the Weston Fulton Professor at the University of Tennessee and Chief Scientist for AI/ML in the Physical Sciences at PNNL. His work spans two decades of pioneering contributions at Oak Ridge National Laboratory, Amazon’s Grand Challenge, and international scientific collaborations, earning him major distinctions including the Feynman Prize, Medard Welch Award, and election to the National Academy of Inventors. With a passion for using machine learning to uncover physical laws, accelerate materials discovery, and enable atomic‑scale control, he brings deep expertise and visionary leadership to the ML‑STEM workshop.
      </p>
    </div>
  </div>

  <!-- Duscher -->
  <div class="team-card">
    <img src="{{ '/assets/duscher.png' | relative_url }}" alt="Gerd Duscher">
    <div class="team-meta">
      <div class="name">
        Gerd Duscher
        <span class="socials">
            <!-- Website -->
            <a href="https://tickle.utk.edu/mse/faculty/gerd-duscher/" target="_blank" rel="noopener" title="Website" aria-label="Website">
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2c.9 0 2.4 2.1 3 6H9c.6-3.9 2.1-6 3-6ZM5.06 11a7.8 7.8 0 0 1 .16-1h3.01a20 20 0 0 0 0 2H5.22a7.8 7.8 0 0 1-.16-1Zm6.94 9c-.9 0-2.4-2.1-3-6h6c-.6 3.9-2.1 6-3 6Zm3.77-7a20 20 0 0 0 0-2h3.01c.21.98.21 2.02 0 3H15.77ZM7.2 7H4.9a8 8 0 0 1 3.4-2.6c-.43.82-.8 1.7-1.1 2.6Zm9.6 0c-.3-.9-.67-1.78-1.1-2.6A8 8 0 0 1 19.1 7h-2.3ZM7.2 17c.3.9.67 1.78 1.1 2.6A8 8 0 0 1 4.9 17h2.3Zm9.6 0h2.3a8 8 0 0 1-3.4 2.6c.43-.82.8-1.7 1.1-2.6Z"/></svg>
            </a>
            <!-- GitHub -->
            <a href="https://github.com/gduscher" target="_blank" rel="noopener" title="GitHub" aria-label="GitHub">
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.53-1.35-1.29-1.71-1.29-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.73 1.26 3.39.96.1-.76.41-1.26.74-1.55-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.47 5.92.42.36.79 1.07.79 2.16v3.2c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>
            </a>
            <!-- Google Scholar -->
            <a href="https://scholar.google.com/citations?user=kAI2T5EAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener" title="Google Scholar" aria-label="Google Scholar">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13l-8-4.36v3.11L12 19l8-4.25v-3.11L12 16z"/>
</svg>
            </a>
          </span>
      </div>
      <div class="affil">
        University of Tennessee, Knoxville
      </div>
       <!-- Description -->
      <p>
        Gerd Duscher is a professor of Materials Science and Engineering at the University of Tennessee and a leading expert in electron microscopy, spectroscopy, and atomic‑scale materials characterization. His work spans fundamental advances in STEM‑EELS, defect chemistry, and interface analysis, supported by a strong record of mentoring and open‑science contributions through teaching materials and public GitHub repositories. Notably, Duscher’s 1995 study on neural‑network‑based analysis of line‑scan EELS data represents one of the earliest demonstrations of automated experimentation in STEM, highlighting his long‑standing role in pushing microscopy toward intelligent, data‑driven workflows.
      </p>
    </div>
  </div>

</div>

<!-- Tutorials -->
<h2 class="section-title">Tutorials by</h2>

<div class="section-card tutorials-card">
    
  <div class="tutorials-grid">
    <div class="tutorials-col">
      <p>Kevin Roccapriore (AtomQ)</p>
      <p>Rama Vasudevan (ORNL)</p>
      <p>Kamal Choudhary (JHU)</p>
      <p>Colin Ophus (Stanford)</p>
    </div>    
    <div class="tutorials-col">
      <p>Sheryl Sanchez</p>
      <p>Austin Houston</p>
      <p>Elizabeth Heon</p>
      <p>Boris Slautin</p>
    </div>    
  </div> 
  
</div>

<!-- Participation -->
<h2 class="section-title">Participation & Registration</h2>

<div class="section-card participation-card">
    
  <p><strong>Participation is free of charge.</strong> The Summer School welcomes students, researchers, and industry participants interested in Machine Learning for Electron Microscopy.</p>

  <p>The event will be held in a <strong>hybrid format</strong>, with both in‑person (at University of Tennessee) and online attendance options.</p>

  <p><strong>Registration is required.</strong> Please register using the form on the 
    <a href="https://kaliningroup.github.io/summer_school/registration/" class="reg-link">Registration page</a>.
  </p>
</div>

<!-- collaboration -->
<h2 class="section-title">In Collaboration With</h2>

<div class="institution-grid">

  <!-- UTK -->
  <div class="institution-card">
    <p>University of Tennessee</p>
    <img src="{{ '/assets/utk.png'| relative_url }}" alt="UTK logo">
  </div>

  <!-- ORNL -->
  <div class="institution-card">
    <p>Oak Ridge National Laboratory</p>    
    <img src="{{ '/assets/ornl.png'| relative_url }}" alt="ORNL logo">
  </div>

  <!-- BNL -->
  <div class="institution-card">
    <p>Brookhaven National Laboratory</p>
    <img src="{{ '/assets/bnl.png'| relative_url }}" alt="BNL logo">
  </div>

  <!-- Thermo Fisher -->
  <div class="institution-card">
    <p>Thermo Fisher</p>
    <img src="{{ '/assets/thermo.png'| relative_url }}" alt="Thermo Fisher  logo">
  </div>

  <!-- AtomQ -->
  <div class="institution-card">
    <p>AtomQ</p>
    <img src="{{ '/assets/atomq.png'| relative_url }}" alt="AtomQ logo">
  </div>

  <!-- Mat3ra -->
  <div class="institution-card">
    <p>Mat3ra</p>    
    <img src="{{ '/assets/mat3ra.png'| relative_url }}" alt="Mat3ra logo">
  </div>

</div>

<!-- Floating button -->
<!--
<a href="/summer_school/#utk-special" class="utk-float-btn">UTK Students Special</a>

<div id="utk-special" class="utk-block">
  <h2>UTK Students – Special 3‑Credit Option</h2>
  <p>
    UTK students may enroll in <strong>MSE 676 – Special Topic: ML/AI for Electron Microscopy (3 credit hours)</strong>,
    which is linked to the one‑week Summer School held June 22–26, 2026. Because the workshop occurs
    <strong>after the add/drop deadline</strong>, students <strong>cannot drop the course once the workshop begins</strong>.
  </p>

  <p>
    Registration for the course requires <strong>instructor consent</strong>. Please email Prof. Gerd Duscher to enroll in this special course:
    <code class="copy-email"
          onclick="navigator.clipboard.writeText('gduscher@utk.edu'); showCopiedTooltip(event);">
      gduscher@utk.edu
    </code>
  </p>
</div>
-->
