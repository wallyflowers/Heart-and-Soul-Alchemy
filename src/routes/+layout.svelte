<script>
  import "../app.css";
</script>

<div class="navbar bg-transparent fixed z-20">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">
      <img src="alchemy-gold.svg" alt="The Alchemical Symbol for Gold" width=45 height=45>
      Heart & Soul Alchemy
    </a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a>Readings</a></li>
      <li>
        <details>
          <summary>
            About
          </summary>
          <ul class="p-2 bg-base-100 rounded-t-none">
            <li><a>Blog</a></li>
            <li><a>Bio</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>

<slot />

<footer class="footer footer-center p-4 bg-transparent absolute bottom-0 text-base-content">
  <aside>
    <p>Copyright © 2024 - All rights reserved by Beth Parker</p>
  </aside>
</footer>
