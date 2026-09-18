export function menu()
{
    const menu = document.createElement("nav")
    const menuItemKezdőlap = document.createElement("a")
    menuItemKezdőlap.setAttribute("href", "index.html")
    menuItemKezdőlap.innerText = "Kezdőlap"
    menuItemKezdőlap.style.marginRight = "5px"
    menu.appendChild(menuItemKezdőlap)
    document.getElementById("menu")?.appendChild(menu)

    const menuItemAdmin = document.createElement("a")
    menuItemAdmin.setAttribute("href", "admin.html")
    menuItemAdmin.innerText = "Admin"
    menuItemAdmin.style.marginRight = "5px"
    menu.appendChild(menuItemAdmin)
    document.getElementById("menu")?.appendChild(menu)

    const menuItemModerator = document.createElement("a")
    menuItemModerator.setAttribute("href", "moderator.html")
    menuItemModerator.innerText = "Moderátor"
    menuItemModerator.style.marginRight = "5px"
    menu.appendChild(menuItemModerator)
    document.getElementById("menu")?.appendChild(menu)
}