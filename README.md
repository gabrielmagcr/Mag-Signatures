# MAG email signatures

The MAG email signatures and the images they load, hosted here so they no
longer depend on HubSpot Files.

Signature images are hotlinked, never embedded — every time anyone opens one of
these emails, their client re-fetches the image from its URL. That is why the
images live in a repo with stable, versioned URLs instead of in HubSpot.

One repo, public, because nothing here is confidential: the pages and the
headshots are what already goes out on every email MAG sends.

## How to reference an image

Always through jsDelivr, always pinned to a tag:

```
https://cdn.jsdelivr.net/gh/gabrielmagcr/Mag-Signatures@v1.0.0/images/icons/mail.png
```

A tag is immutable on jsDelivr: once a version has been served it is cached
forever and will never change under a live signature. To ship new artwork, push
it and cut a **new** tag, then update the signatures to that tag. Never
re-point an existing tag.

`@master` also works and picks up pushes, but it is for previewing only — do
not put a `@master` URL into a signature that goes out to people.

## Layout

```
*.html                      the 63 signature pages people open to copy their signature
signature-generator/        the SA and US generators, and their own copies of the pages
images/icons/               shared chrome: globe, mail, smartphone
images/headshots/us/        US headshots
images/headshots/sa/        SA headshots
images/headshots/sa-2025/   the 2025 SA round
assets/                     the step-by-step install screenshots
migration/url-map.json      every old HubSpot URL and the file it became
```

## The pages

Served by GitHub Pages off `master`:

```
https://gabrielmagcr.github.io/Mag-Signatures/Gabriel_Arias.html
```

Two different jobs in one repo, and the difference matters. The images are
pinned by tag and must never change under a signature already sitting in
someone's mail client. The pages are expected to change, and are served off
`master`. Pushing a page therefore does not touch what `@v1.0.0` serves.

## Adding or changing artwork

```bash
# add the file under images/, then
git add images && git commit -m "new headshot for <name>"
git push
git tag v1.1.0 && git push origin v1.1.0    # a NEW tag, never move v1.0.0
# then update the signatures that use it to @v1.1.0
```

## HubSpot

`migration/url-map.json` maps each old `magneticcreative.com/hubfs/…` URL to
the file that replaced it. Leave the HubSpot files live but unused during the
transition — deleting them breaks the images in every already-sent email, and
HubSpot has no redirect from a deleted file URL.
