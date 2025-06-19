'use client'

import MenuItem from "./menuItem";

export default function Content() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {/* menu 1 */}
      <MenuItem
        imageMobile="/images/image-waffle-mobile.jpg"
        imageDesktop="/images/image-waffle-desktop.jpg"
        imageThumbnail="/images/image-waffle-thumbnail.jpg"
        altImage="waffle"
        typeDessert="Waffle"
        title="Waffle with Berries"
        price="6.50"
      />

      {/* munu 2 */}
      <MenuItem
        imageMobile="/images/image-creme-brulee-mobile.jpg"
        imageDesktop="/images/image-creme-brulee-desktop.jpg"
        imageThumbnail="/images/image-creme-brulee-thumbnail.jpg"
        altImage="vanillaBean"
        typeDessert="Crème Brûlée"
        title="Vanilla Bean Crème Brûlée"
        price="7.00"
      />

      {/* munu 3 */}
      <MenuItem
        imageMobile="/images/image-macaron-mobile.jpg"
        imageDesktop="/images/image-macaron-desktop.jpg"
        imageThumbnail="/images/image-macaron-thumbnail.jpg"
        altImage="Macaron"
        typeDessert="Macaron"
        title="Macaron Mix of Five"
        price="8.00"
      />

      {/* munu 4 */}
      <MenuItem
        imageMobile="/images/image-tiramisu-mobile.jpg"
        imageDesktop="/images/image-tiramisu-desktop.jpg"
        imageThumbnail="/images/image-tiramisu-thumbnail.jpg"
        altImage="Tiramisu"
        typeDessert="Tiramisu"
        title="Classic Tiramisu"
        price="5.50"
      />

      {/* munu 5 */}
      <MenuItem
        imageMobile="/images/image-baklava-mobile.jpg"
        imageDesktop="/images/image-baklava-desktop.jpg"
        imageThumbnail="/images/image-baklava-thumbnail.jpg"
        altImage="baklava"
        typeDessert="Baklava"
        title="Pistachio Baklava"
        price="4.00"
      />

      {/* munu 6 */}
      <MenuItem
        imageMobile="/images/image-meringue-mobile.jpg"
        imageDesktop="/images/image-meringue-desktop.jpg"
        imageThumbnail="/images/image-meringue-thumbnail.jpg"
        altImage="pie"
        typeDessert="Pie"
        title="Lemon Meringue Pie"
        price="5.00"
      />

      {/* munu 7 */}
      <MenuItem
        imageMobile="/images/image-cake-mobile.jpg"
        imageDesktop="/images/image-cake-desktop.jpg"
        imageThumbnail="/images/image-cake-thumbnail.jpg"
        altImage="cake"
        typeDessert="Cake"
        title="Red Velvet Cake"
        price="4.50"
      />

      {/* munu 8 */}
      <MenuItem
        imageMobile="/images/image-brownie-mobile.jpg"
        imageDesktop="/images/image-brownie-desktop.jpg"
        imageThumbnail="/images/image-brownie-thumbnail.jpg"
        altImage="brownie"
        typeDessert="Brownie"
        title="Salted Caramel Brownie"
        price="5.50"
      />

      {/* munu 9 */}
      <MenuItem
        imageMobile="/images/image-panna-cotta-mobile.jpg"
        imageDesktop="/images/image-panna-cotta-desktop.jpg"
        imageThumbnail="/images/image-panna-cotta-thumbnail.jpg"
        altImage="pannaCotta"
        typeDessert="Panna Cotta"
        title="Vanilla Panna Cotta"
        price="6.50"
      />
    </div>
  )
}
