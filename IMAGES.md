# Image Assets - Toxic Tailoring & Design

## Local Image Files

All images are stored in the project root directory and referenced with relative paths (`./filename.jpg`).

### Image Mapping

| Section | Image File | Purpose |
|---------|-----------|---------|
| **Hero** | `vladimir-gladkov-4hKlL4bfraY-unsplash.jpg` | Premium suit/formal wear hero image |
| **About** | `fotis-fotopoulos-1ni0ophtrJY-unsplash.jpg` | Craftsmanship & atelier aesthetic |
| **Advantages - Craftsmanship** | `bas-peperzak-Gv9B4ZdT8io-unsplash.jpg` | Fabric texture & materials |
| **Advantages - Precision** | `caitlyn-wilson-YAgNOtZkpp8-unsplash.jpg` | Tailoring & fitting process |
| **Advantages - Legacy** | `istockphoto-2083384737-1024x1024.jpg` | Couture & luxury fashion |
| **Gallery - Evening Couture** | `dwayne-joe-_KEhE5jCIw4-unsplash.jpg` | Gown & formal wear |
| **Gallery - Power Tailoring** | `janay-peters-C0ktGJTNXn0-unsplash.jpg` | Business suit & tailoring |
| **Gallery - Refined Elegance** | `valentin-blary-IAARv_Yr5Vc-unsplash.jpg` | Elegant formal wear |
| **Gallery - Bridal Collection** | `vivian-k-LAn5raTmWP0-unsplash.jpg` | Bridal couture |
| **Gallery - Statement Pieces** | `oludemilade-aremu-7oMpkXrMCmw-unsplash.jpg` | Bold fashion statement |
| **Gallery - Modern Bespoke** | `soweto-graphics-BQ0kjFCtp4Q-unsplash.jpg` | Contemporary tailoring |
| **Gallery - Signature Pieces** | `gvz-42-BGqZpSc69g4-unsplash.jpg` | Essential luxury items |
| **Gallery - Haute Couture** | `debby-hudson-1eV-OecIKgI-unsplash.jpg` | Premium design & detail |
| **Gallery - Tailored Excellence** | `premium_photo-1674758665369-c02f4737b804.avif` | Premium menswear |
| **Gallery - Runway Ready** | `alexei-maridashvili-4f3VU5uhOEA-unsplash.jpg` | High-fashion runway look |
| **Gallery - Custom Collection** | `istockphoto-2167270115-1024x1024.jpg` | Bespoke design showcase |

## Image Count

- **Total Images**: 16
- **Unique Images**: 16 (no repeats)
- **Format**: JPG (15), AVIF (1)
- **Path Style**: Relative (`./filename`)

## Developer Notes

All images are **locally stored** in the project root. This ensures:
- ✅ Fast page load (no external CDN dependency)
- ✅ Offline functionality
- ✅ Complete control over assets
- ✅ No broken links from external sources

### For Future Optimization

If the repo grows, consider organizing images into a dedicated folder:
```
/images/
  ├── hero/
  ├── gallery/
  ├── about/
  └── advantages/
```

Then update paths to `./images/hero/filename.jpg`, etc.

**Current state**: All images in root for simplicity and zero CDN dependency.
