/**
 * File Name: utils.js
 * Student's Name: Hoang Giang Dang
 * Student ID: 301255147
 * Date: Jun 1,2024
 */
export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};
