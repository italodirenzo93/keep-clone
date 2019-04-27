<template>
    <aside class="sidebar">
        <ul class="sidebar-list">
            <li class="active"><a href="#"><i class="far fa-lightbulb"></i> Notes</a></li>
            <li><a href="#"><i class="far fa-bell"></i> Reminders</a></li>
        </ul>
        <ul class="sidebar-list">
            <li><a href="#"><i class="fas fa-archive"></i> Archive</a></li>
            <li><a href="#"><i class="far fa-trash-alt"></i> Trash</a></li>
        </ul>
    </aside>
</template>

<style>
.sidebar {
  grid-area: sidebar;
  width: 280px;
}
.sidebar-list {
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  padding: 8px 0;
}
.sidebar-list > li {
  padding-left: 24px;
  border-radius: 0 25px 25px 0;
  color: #202124;
  font-size: .875rem;
  line-height: 1.25rem;
  display: block;
  min-height: 40px;
  padding-bottom: 4px;
  padding-top: 4px;
}
.sidebar-list:not(:last-child) {
  border-bottom: 1px solid #dadce0;
}
.sidebar-list > li:hover {
  background-color: #f1f3f4;
}
.sidebar-list > li.active {
  background-color: #feefc3;
}
.sidebar-list > li > a {
  text-decoration: none;
  display: block;
  width: 100%;
  color: inherit;
  line-height: 40px;
}
</style>