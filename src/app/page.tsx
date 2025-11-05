import MenuIcon from "@mui/icons-material/Menu";
import SchoolIcon from "@mui/icons-material/School";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupsIcon from "@mui/icons-material/Groups";
import Image from "next/image";
import UnicraftLogo from "../../public/unicraft-logo.svg";
import { Button, Container, Box, Typography, Card, CardContent } from "@mui/material";
import ImageGallery from "../components/ImageGallery";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col bg-[#f5f9ff]">
			<header className="sticky top-0 bg-[#eaf2ff] flex-nowrap flex w-full items-center justify-between p-4 shadow-md z-50">
				<Image
					src={UnicraftLogo}
					alt="Unicraft logo"
					height={30}
				/>
				<div className="flex items-center gap-2">
					<Button variant="text" sx={{ color: "blue" }}>Login</Button>
					<Button variant="contained" sx={{ bgcolor: "#f59e0b", color: "white", "&:hover": { bgcolor: "#d97706" } }}>Sign Up</Button>
					<MenuIcon sx={{ fontSize: 40, color: "#1976d2", cursor: "pointer", ml: 1 }} />
				</div>
			</header>

			<main className="flex-1">
				<Box sx={{ bgcolor: "#eef5ff", color: "#0f172a", py: 8 }}>
					<Container maxWidth="lg">
						<Typography variant="h2" component="h1" gutterBottom fontWeight="bold" textAlign="center">
							Experience College Tours Like Never Before
						</Typography>
						<Typography variant="h5" textAlign="center" sx={{ mb: 4, opacity: 0.9 }}>
							Explore university campuses in immersive Minecraft worlds
						</Typography>
					<Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
						<Button variant="contained" size="large" sx={{ bgcolor: "#2563eb", color: "white", "&:hover": { bgcolor: "#1e40af" }, px: 4 }}>
							Start Exploring
						</Button>
						<Button variant="outlined" size="large" sx={{ borderColor: "#2563eb", color: "#2563eb", "&:hover": { borderColor: "#1e40af", bgcolor: "rgba(37,99,235,0.06)" }, px: 4 }}>
							Learn More
						</Button>
					</Box>

					</Container>
				</Box>

				<Container maxWidth="lg" sx={{ py: 8 }}>
					<Typography variant="h3" component="h2" gutterBottom textAlign="center" fontWeight="bold" sx={{ mb: 6 }}>
						Why Unicraft?
					</Typography>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<Card sx={{ height: "100%", textAlign: "center", p: 3 }}>
							<CardContent>
								<SchoolIcon sx={{ fontSize: 60, color: "#f59e0b", mb: 2 }} />
								<Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
									Authentic Campuses
								</Typography>
								<Typography variant="body1" color="text.secondary">
									Explore meticulously crafted 1:1 scale replicas of real university campuses, built block by block in Minecraft.
								</Typography>
							</CardContent>
						</Card>
						<Card sx={{ height: "100%", textAlign: "center", p: 3 }}>
							<CardContent>
								<ExploreIcon sx={{ fontSize: 60, color: "#f59e0b", mb: 2 }} />
								<Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
									Interactive Tours
								</Typography>
								<Typography variant="body1" color="text.secondary">
									Walk through dorms, lecture halls, and student centers at your own pace. Visit from anywhere, anytime.
								</Typography>
							</CardContent>
						</Card>
						<Card sx={{ height: "100%", textAlign: "center", p: 3 }}>
							<CardContent>
								<GroupsIcon sx={{ fontSize: 60, color: "#f59e0b", mb: 2 }} />
								<Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
									Connect with Students
								</Typography>
								<Typography variant="body1" color="text.secondary">
									Join guided tours with current students, ask questions in real-time, and get the authentic campus experience.
								</Typography>
							</CardContent>
						</Card>
					</div>
				</Container>

				<Box sx={{ bgcolor: "#f0f6ff", py: 8 }}>
					<Container maxWidth="lg">
						<Typography variant="h3" component="h2" gutterBottom textAlign="center" fontWeight="bold" sx={{ mb: 2 }}>
							Featured Campus Tours
						</Typography>
						<Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
							Browse our collection of virtual campus tours
						</Typography>
						<ImageGallery images={[
							{ src: "Campus Screenshot 1", caption: "Beautiful campus view 1" },
							{ src: "Campus Screenshot 2", caption: "Stunning architecture 2" },
							{ src: "Campus Screenshot 3", caption: "Vibrant student life 3" },
							{ src: "Campus Screenshot 4", caption: "Modern facilities 4" },
							{ src: "Campus Screenshot 5", caption: "Historic buildings 5" },
							{ src: "Campus Screenshot 6", caption: "Green spaces 6" }
						]} />
					</Container>
				</Box>

				<Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
					<Typography variant="h3" component="h2" gutterBottom fontWeight="bold">
						Ready to Start Your Journey?
					</Typography>
					<Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
						Join thousands of students exploring their future campuses in Minecraft
					</Typography>
					<Button variant="contained" size="large" sx={{ px: 6, bgcolor: "#f59e0b", color: "white", "&:hover": { bgcolor: "#d97706" } }}>
						Get Started Today
					</Button>
				</Container>
		</main>

		<footer className="bg-[#e0edff] text-gray-700 py-6">
			<Container maxWidth="lg">
				<Typography variant="body2" textAlign="center">
					© 2025 Unicraft. All rights reserved.
				</Typography>
			</Container>
		</footer>

		</div>
	);
}
