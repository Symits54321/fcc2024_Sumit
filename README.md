# Lizmotors Internship Assignment by Sumit Singh

Welcome to my Lizmotors Internship Assignment 2024 FrontEnd-Coding Challenge completed using React, a JavaScript framework.

## Screenshot

![Project Screenshot](screenshot/capture1.png)

## Hoisted Link

[Click here to view the project](https://fcc2024-sumit-lizmotors.vercel.app/)

## Pages Used

Only the `homepage.js` page is utilized and later imported into the app. In the homepage, several components are used.

## Components Used

- **canvascomp**: Contains JavaScript files responsible for building the arrow using canvas.
- **columncomp**: Houses all JavaScript files related to each column. The button views are divided into four columns because different components have different arrow styles, and this design can only be built one column at a time.
- **splittercomp**: Includes all files related to joining the splitter with buttons.
- **hovercomp**: Deals exclusively with the hover design and its associated components.

## Data Management

All data about button names and connections are managed using parent-child relationships in objects. Here's an example of how the objects are structured:

```javascript
// Sample data structure
........
      ]
    },
    {
        "id": 10010,
        "name": "Planning",
        "bgcolor": "#82b3e8",
        "textColor": "black",
        "hover": {
            "positive": 12000,
            "negative": 8000,
            "comments": 10000
        },
        "children": [
            {
                "id": 10011,
                "name": "PRD",
                "bgcolor": "#82b3e8",
                "textColor": "black",
                "hover": {
                    "positive": 8000,
                    "negative": 4000,
                    "comments": 6000
                }
            },
            {
                "id": 10012,
                "name": "Specs",
                "bgcolor": "#82b3e8",
                "textColor": "black",
                "hover": {
                    "positive": 4000,
                    "negative": 2000,
                    "comments": 3000
                }
            }
        ]
    },
    {
        "id": 10013,
        "name": "Designing",
        "bgcolor": "#e96343",
        "textColor": "black",
        "hover": {
            "positive": 15000,
            "negative": 10000,
            "comments": 12000
        },
        "children": [
            {
                "id": 10014,
                "name": "Hardware",
                "bgcolor": "#e96343",
                "textColor": "black",
                "hover": {
                    "positive": 7000,
                    "negative": 4000,
                    "comments": 5000
                }
            },
            {
                "id": 10015,
                "name": "Software",
                "bgcolor": "#e96343",
                "textColor": "black",
                "hover": {
                    "positive": 8000,
                    "negative": 6000,
                    "comments": 7000
                }
            }
        ]
```

## Functionality

Hovering over each button provides information about positive reviews, negative reviews, and comments displayed in a bar graph. This interactive feature enhances user experience by providing insights in real-time.

## Readme.md

This README provides an overview of the project, including its structure, components used, data management approach, and functionality. For running the project locally, ensure you have the necessary dependencies installed and follow the instructions in the project repository.

Feel free to explore the codebase and provide feedback or suggestions for improvement. Thank you for checking out my Lizmotors Internship Assignment!
