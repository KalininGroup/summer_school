---
layout: page
title: Appalachian Regional Electron Microscopy Society Topical Conference
menu_title: Home
menu_icon: house-door
---

<style>
.animated-title {
  font-size: 2.8rem;
  font-weight: 900;
  text-align: center;
  letter-spacing: -0.5px;

  /* Multi-color gradient that will animate */
  background: linear-gradient(
    90deg,
    #ff7a18c3,   /* warm orange */
    #ffb347c5,   /* soft golden orange */
    #ff7a18c3    /* warm orange again for symmetry */
);

  background-size: 400% 100%; /* Needed for smooth sweeping effect */

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* Combine color wave + soft vertical float motion */
  animation: none; /*colorwave 35s linear infinite, floatwave 15s ease-in-out infinite; */
}

/* Left → Right color sweep */
@keyframes colorwave {
  0%   { background-position:   0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position:   0% 50%; }
}

/* Gentle up–down wave motion */
@keyframes floatwave {
  0%, 100% { transform: translateY(0px); }
  50%      { transform: translateY(-4px); }
}

/* Mobile scaling */
@media (max-width: 700px) {
  .animated-title {
    font-size: 2rem;
  }
}
</style>

<h1 class="animated-title">
  Summer School on ML for Electron Microscopy
</h1>

Dates: TBA

Hybrid format: online and at University of Tennessee, Knoxville, TN

---

The Summer School will introduce participants to the core concepts of Machine Learning for Electron Microscopy, with a strong emphasis on the rapidly evolving landscape of automated and AI‑assisted experimentation. While foundational ML topics will be covered, the central focus of the program is on next‑generation autonomous microscopy workflows and their practical implementation.

Participants will explore:
- AI‑driven experimental workflows
- Real‑time data analytics and adaptive decision‑making
- Hands‑on automation and instrument control
- Working with real microscopy data and digital twins
- Implementation of autonomous microscopy

Whether your interests lie in microscopy data analysis, automated instrument control, or AI‑enhanced materials discovery, this school offers a comprehensive introduction to the state‑of‑the‑art and a forward‑looking perspective on the future of ML‑enabled microscopy.

---

## Organizing Team

<!-- Team Grid Wrapper -->
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




---

---

### Participation

<div style="text-align:center; font-size:1.5rem; opacity:0.7; margin-top:2rem;">
Stay tuned for the updates!
</div>


