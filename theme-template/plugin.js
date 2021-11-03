const pluginName = "UltraDark" // Set your Plugin Name here
const description = "Extreme dark mode for Oculus app" // Set your Plugin Description Here

module.exports = {
    "id": "theme-"+pluginName.toLowerCase(),
    "name": description,
    init() {
        let style = document.createElement('link');
        style.setAttribute("rel", "stylesheet");
        style.setAttribute("href", __dirname + String.raw`\theme.css`);
        style.className = pluginName.toLowerCase()+"-customcss";
        document.body.append(style);
        console.log(`[theme-${pluginName.toLowerCase()}] Enabled ${pluginName}`);
    },
    uninit() {
        document.getElementsByClassName(pluginName.toLowerCase()+"-customcss")[0].remove();
        console.log(`[theme-${pluginName.toLowerCase()}] Disabled ${pluginName}`);
    }
};
