---
layout: page
title: Feedback & Suggestions
menu_title: Feedback
menu_icon: clipboard-data
permalink: /feedback/
---

<style>
.tabs {
  max-width: 760px;
  margin: 2rem auto;
}

.tab-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.tab-buttons button {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  background: #f7f7f7;
  cursor: pointer;
  border-radius: 6px;
}

.tab-buttons button.active {
  background: #eaeaea;
  font-weight: 600;
}

.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
}
</style>

<div class="tabs">
  <div class="tab-buttons">
    <button class="active" onclick="showTab('form1')">Certificate Request</button>
    <button onclick="showTab('form2')">Feedback & Suggestions</button>
  </div>

  <div id="form1" class="tab-content active">
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeKMjSe73e_x02iLsrIkSU6YGEkeQXP5q1m6GDd4UiSERjrQw/viewform?embedded=true" 
      width="100%" 
      height="1730" 
      frameborder="0" 
      marginheight="0" 
      marginwidth="0">
      Loading…
    </iframe>
  </div>

  <div id="form2" class="tab-content">
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScgGXo7uT7TR8Gi1GbEJT8y0WwccUmd0c8wY7fv45lwnIugsQ/viewform?embedded=true" 
      width="100%" 
      height="1124" 
      frameborder="0" 
      marginheight="0" 
      marginwidth="0">
      Loading…
    </iframe>
  </div>
</div>

<script>
function showTab(id) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-buttons button').forEach(el => el.classList.remove('active'));

  document.getElementById(id).classList.add('active');
  event.target.classList.add('active');
}
</script>
