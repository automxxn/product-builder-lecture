# Blueprint

## Overview

This project is a website for the 313 Student Protection Center - Korea. It includes a main landing page that provides information about their services and a separate "Quote Calculator" page to allow users to get an estimated premium for tuition insurance.

## Project Documentation

### Style, Design, and Features

#### Main Landing Page (`index.html`)

*   **Layout:** A single-column layout featuring a header, a central hero section, and a comprehensive footer.
*   **Color Palette:** The primary color is a professional dark blue, utilized for key interactive elements like buttons. Text is rendered in a dark gray for readability against a light gray background.
*   **Typography:** The site employs a clean, universally compatible sans-serif font (Arial).
*   **Texture:** A subtle noise texture is applied to the main background, adding a premium, tactile feel to the user experience.
*   **Header:** Contains the "313 Student Protection Center - Korea" logo and a navigation menu with links to different sections.
*   **Hero Section:** Features a prominent headline, a descriptive paragraph, and two primary calls-to-action: "학비 환불보험 바로 가입" (Tuition Refund Insurance) and "건강보험 바로 가입" (Health Insurance).
*   **Footer:** Organized into two distinct sections: one for company contact information and another for a detailed legal disclaimer.

#### Quote Calculator Page (`quote.html`)

*   **Purpose:** Allows users to calculate an insurance premium based on their selected plan, coverage amount, and other qualifying factors.
*   **Design:** 
    *   A clean, modern, and intuitive form layout.
    *   Features interactive radio buttons for plan selection, complete with illustrative images.
    *   Includes input fields for coverage amount, departure and academic dates, and country of citizenship.
    *   A live-updating "Total Premium Quote" section provides immediate feedback.
    *   Styled with `quote.css` to align with the main page's theme while being optimized for a form-based interface.
*   **Interactivity (`quote.js`):
    *   The form dynamically calculates the premium in real-time as the user provides input.
    *   The calculation is based on the selected plan (K-12 or College), the coverage amount, and whether the "Interrupt For Any Reason" (IFAR) option is chosen.
    *   The "Purchase Now" button currently triggers an alert with the final premium for demonstration purposes.
*   **Navigation:** The "학비 환불보험 바로 가입" button on the main landing page now directs users to `quote.html`.

## Current Request Plan

*   **Task:** Implement the "Quote Calculator" feature.
*   **Steps Completed:**
    1.  **Created `quote.html`:** Built the HTML structure for the new quote calculator form page.
    2.  **Created `quote.css`:** Added specific styles for the calculator page to ensure a responsive and user-friendly design.
    3.  **Created `quote.js`:** Implemented JavaScript to handle real-time premium calculations based on user input.
    4.  **Updated `index.html`:** Modified the "학비 환불보험 바로 가입" button to link to the new `quote.html` page.
    5.  **Updated `blueprint.md`:** Documented the addition of the new Quote Calculator feature, including its design, functionality, and associated files.