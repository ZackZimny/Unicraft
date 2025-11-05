"use client";

import React, { useMemo, useState } from "react";
import { Box, Card, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type ImageItem = {
  readonly src: string;
  readonly caption: string;
};

interface ImageGalleryProps {
  readonly images: ReadonlyArray<ImageItem>;
}

const ITEMS_PER_VIEW = 2;
const ANIMATION_DURATION_MS = 400;

export default function ImageGallery({ images }: ImageGalleryProps) {
  const pages = useMemo(() => {
    const chunkList: ImageItem[][] = [];
    for (let index = 0; index < images.length; index += ITEMS_PER_VIEW) {
      chunkList.push(images.slice(index, index + ITEMS_PER_VIEW));
    }
    return chunkList;
  }, [images]);

  const totalPages = pages.length || 1;
  const [pageIndex, setPageIndex] = useState(0);

  const canGoPrev = pageIndex > 0;
  const canGoNext = pageIndex < totalPages - 1;

  const handlePrev = () => {
    if (!canGoPrev) {
      return;
    }
    setPageIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    if (!canGoNext) {
      return;
    }
    setPageIndex((prev) => Math.min(totalPages - 1, prev + 1));
  };

  const activeCaption = images[pageIndex * ITEMS_PER_VIEW]?.caption ?? "";

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <IconButton onClick={handlePrev} disabled={!canGoPrev}>
          <ArrowBackIcon sx={{ color: canGoPrev ? "#0f172a" : "rgba(15,23,42,0.2)" }} />
        </IconButton>
        <Box sx={{ flex: 1, overflow: "hidden" }}>
          <Box
            sx={{
              display: "flex",
              transform: `translateX(-${pageIndex * 100}%)`,
              transition: `transform ${ANIMATION_DURATION_MS}ms ease`,
            }}
          >
            {pages.map((page, pageIdx) => (
              <Box
                key={`page-${pageIdx}`}
                sx={{ display: "flex", flex: "0 0 100%", gap: 2 }}
              >
                {page.map((image) => (
                  <Card
                    key={image.src}
                    sx={{
                      height: 300,
                      flex: 1,
                      bgcolor: "rgba(226,232,255,0.6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="h6" color="text.secondary">
                      {image.src}
                    </Typography>
                  </Card>
                ))}
                {page.length < ITEMS_PER_VIEW && (
                  <Box sx={{ flex: 1 }} />
                )}
              </Box>
            ))}
          </Box>
        </Box>
        <IconButton onClick={handleNext} disabled={!canGoNext}>
          <ArrowForwardIcon sx={{ color: canGoNext ? "#0f172a" : "rgba(15,23,42,0.2)" }} />
        </IconButton>
      </Box>
      <Typography variant="body1" textAlign="center" sx={{ mt: 2 }}>
        {activeCaption}
      </Typography>
    </Box>
  );
}
