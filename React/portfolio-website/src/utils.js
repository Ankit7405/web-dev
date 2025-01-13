// export const getImageUrl = (path) => {
//     const val = new URL(`/assets/${path}`, import.meta.url).href;
//     console.log(path);
//     console.log(val);
//     return val;
//   };

export const getImageUrl = (path) => {
    if (!path) {
        console.warn("Invalid image path provided:", path);
        return ''; // Return an empty string or a default placeholder.
    }
    // Construct the URL assuming assets are in the "public/assets" folder.
    const basePath = '/src/assets/';
    const imageUrl = `${basePath}${path}`;
    console.log("Resolved Image Path:", imageUrl);
    const val = new URL(imageUrl, import.meta.url).href;
    console.log("Final Ans ", val);
    return val;
};