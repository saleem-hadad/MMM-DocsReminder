# MMM-DocsReminder
A simple visual reminder about the documents that are going to expire soon. [MagicMirror](https://magicmirror.builders/).

![Screenshot](https://github.com/saleem-hadad/MMM-DocsReminder/blob/main/example.png "Screenshot")

## Installation

Navigate to your MagicMirror `modules` folder and clone this repository using:

```bash
git clone https://github.com/saleem-hadad/MMM-DocsReminder.git
```

## Configuration & Usage
This module is intended to be extremely simple, register the module config as follow:

```json
    {
        module: "MMM-DocsReminder",
        position: "top_left",
        config: {
            documents: [
                { name: "docs title", dueDate: "2025-02-15" }, // YYYY-MM-DD
            ],
        }
    }
```

Enjoy!