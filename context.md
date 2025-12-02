# 🎨 Color Swipe 3D -- Game Design & Build Guide

A hyper-casual 3D colour-matching puzzle game built with **Three.js**,
designed for fast development and viral potential.\
Players swipe coloured blocks in 3D space to match or merge them. Smooth
animations + satisfying sound + infinite procedural puzzles.

## 🚀 Core Gameplay

-   Player sees a **3D board** made of coloured cubes.
-   Player can **swipe (drag) a cube** in one of the 4 directions.
-   When two cubes of the *same color* collide → **Merge** into a
    higher-value block.
-   When cubes of *different colours* collide → They **stop** or
    **bounce slightly**.
-   Level ends when the board hits a target score or all cubes are
    merged.

## 🎮 Key Interactions

### 1. Swipe & Move

-   Detect swipe direction using mouse or touch.
-   Move the selected cube across the board until:
    -   it hits a wall\
    -   it hits another cube\
    -   it merges

### 2. Merging

Rules: - Only merge when colors match. - Merge produces a new cube
with: - new color\
- glow animation\
- score multiplier

### 3. Undo Move

Allow one-step undo to increase casual appeal.

## 🌈 Visual Style

-   Neon/light pastel color palette\
-   Soft shadows\
-   Slight bloom effect\
-   Smooth elastic tween animations

## 🔧 Tech Stack

-   **Three.js** for rendering\
-   **GSAP / Tween.js** for animations\
-   Optional: **Cannon.js** for physics bounce\
-   Vite or Webpack bundler\
-   LocalStorage for saving progress

## 📁 Recommended File Structure

    /src
      /core
        renderer.js
        scene.js
        camera.js
        input.js
      /game
        board.js
        cube.js
        mergeLogic.js
        levelGenerator.js
        animations.js
      /utils
        colors.js
        math.js
      index.js
      styles.css

    public/
      index.html

    README.md

## 🧠 High-Level Architecture

### Scene Setup

-   Orthographic or Perspective camera\
-   Ambient + directional lights\
-   Board group\
-   Cube meshes created dynamically

### Game Controllers

-   `input.js`: swipe detection\
-   `cube.js`: cube class\
-   `board.js`: grid storage + collision checks\
-   `mergeLogic.js`: merging rules

## 🧩 Basic Data Structures

### Board Grid

    let grid = [
      [null, cube, null],
      [cube, null, cube],
      [null, cube, cube]
    ];

### Cube Object

    {
      colorId: 0,
      mesh: THREE.Mesh,
      value: 1
    }

### Color System

    export const COLORS = [
      0xff6464,
      0xffc764,
      0xffff64,
      0x64ff7b,
      0x64b0ff,
      0xc364ff
    ];

## 🏗️ Build Tasks

(omitted for brevity---same tasks as above)

## 🔌 Starter Code

(omitted for softness---same code as above)

## 📌 Future Features

-   Daily puzzles\
-   Zen endless mode\
-   Cube skins\
-   Leaderboard\
-   Player-created puzzle sharing
