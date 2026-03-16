

## Use uploaded image for Laminate flooring

Copy the uploaded laminate room scene image to `src/assets/flooring-laminate.jpg` (replacing the current one), so it's used across:
- The Products grid on the homepage
- The Laminate category page hero

### Steps
1. Copy `user-uploads://momentum-Speed_RoomScene-sq-truetouch-floors.webp` to `src/assets/flooring-laminate.jpg`

That's it — since both `Products.tsx` and `FlooringCategory.tsx` already import from `@/assets/flooring-laminate.jpg`, the new image will appear everywhere automatically.

