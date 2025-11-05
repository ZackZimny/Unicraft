"use client";

import React, { useState } from 'react';
import { Box, IconButton, Card, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface ImageGalleryProps {
	images: { src: string; caption: string }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex((prev) => Math.max(0, prev - 2));
	};

	const handleNext = () => {
		setCurrentIndex((prev) => Math.min(images.length - 2, prev + 2));
	};

	const canGoPrev = currentIndex > 0;
	const canGoNext = currentIndex < images.length / 2;

	return (
		<Box>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
				<IconButton onClick={handlePrev} disabled={!canGoPrev}>
					<ArrowBackIcon sx={{ color: canGoPrev ? '#0f172a' : 'transparent' }} />
				</IconButton>
				<Box sx={{ display: 'flex', gap: 2, flex: 1 }}>
					{images.slice(currentIndex, currentIndex + 2).map((image, idx) => (
						<Card key={currentIndex + idx} sx={{ height: 300, flex: 1, bgcolor: 'gray.200', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<Typography variant="h6" color="text.secondary">{image.src}</Typography>
						</Card>
					))}
				</Box>
				<IconButton onClick={handleNext} disabled={!canGoNext}>
					<ArrowForwardIcon sx={{ color: canGoNext ? '#0f172a' : 'transparent' }} />
				</IconButton>
			</Box>
			<Typography variant="body1" textAlign="center" sx={{ mt: 2 }}>
				{images[currentIndex]?.caption}
			</Typography>
		</Box>
	);
}
