# YaBlocker

**YaBlocker** is a lightweight Chrome extension designed to remove advertisements from Yandex, enhancing your browsing experience by providing a cleaner interface without unnecessary distractions.

## Features

- **Ad Removal**: Automatically detects and removes various types of advertisements on Yandex pages, including sidebars and pop-ups.
- **Seamless Integration**: Works quietly in the background to maintain an ad-free environment while you browse Yandex.
- **Regular Checks**: Continuously scans for new advertisements every 500 milliseconds and removes them promptly.
  
## Installation

1. **Clone or Download** this repository to your local machine.

2. **Open Chrome** and navigate to `chrome://extensions`.

3. **Enable Developer Mode** by toggling the switch in the top right corner.

4. Click on the **"Load unpacked"** button and select the directory where you downloaded/cloned this repository.

5. Your extension should now be visible in the extensions list. Ensure it is enabled for it to operate.

## Usage

Once installed and enabled, YaBlocker will automatically start removing advertisements from Yandex web pages. There is no need for additional configuration or interaction.

## Configuration

Currently, YaBlocker does not require any specific configuration. It uses predefined rules to detect and remove ads. However, the detection criteria are implemented in `content.js` and can be adjusted if necessary for specific needs.

## Compatibility

- **Browser**: Google Chrome (manifest version 3)
- **Operating Systems**: Cross-platform (Windows, MacOS, Linux)

## Permissions

YaBlocker requires the following permissions:

- **activeTab**: To interact with the content of the active Yandex tab.
- **webRequest** & **webRequestBlocking**: To allow interception and modification of network requests.
- **<all_urls>**: To allow operation across all Yandex subdomains.

## Limitations & Future Improvements

- Currently, geared towards Yandex and might not perform optimally on other websites.
- Possible future improvements may include customizable ad detection rules or user feedback mechanisms to suggest improvements.

## Contributing

We welcome contributions! If you'd like to help improve YaBlocker, please fork the repository and submit a pull request. Any bug reports or feature requests can be submitted through GitHub issues.


## Disclaimer

YaBlocker is an independent project and is not affiliated with or endorsed by Yandex. This tool is intended to enhance user experience through ad removal and users should use it in compliance with all applicable laws and terms of service.

---

Happy ad-free browsing! 🚀
