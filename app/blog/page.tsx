import type { Metadata } from "next"
import Link from "next/link"
import { Search, Calendar, User, ArrowRight, Clock, Sparkles, TrendingUp, BookOpen, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "NexusByte Blog - Latest I.T. Insights & Technology News | Sydney",
  description:
    "Stay updated with the latest technology trends, I.T. tips, cybersecurity insights, and industry news from NexusByte's expert team in Sydney.",
  keywords:
    "IT blog Sydney, technology news, cybersecurity tips, software development insights, computer repair guides, networking tutorials",
}

// Mock blog data - in a real app, this would come from a CMS or database
const featuredPosts = [
  {
    id: 1,
    title: "The Future of Cybersecurity: Protecting Sydney Businesses in 2024",
    excerpt:
      "Discover the latest cybersecurity threats facing Australian businesses and learn how to implement robust security measures to protect your organization.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Joseph Chen",
    date: "2024-05-15",
    readTime: "8 min read",
    category: "Cybersecurity",
    featured: true,
    tags: ["Security", "Business", "Trends"],
  },
  {
    id: 2,
    title: "Cloud Migration Strategies for Small to Medium Enterprises",
    excerpt:
      "A comprehensive guide to successfully migrating your business to the cloud, including cost considerations and best practices.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Natalie Rodriguez",
    date: "2024-05-12",
    readTime: "12 min read",
    category: "Cloud Computing",
    featured: true,
    tags: ["Cloud", "Migration", "SME"],
  },
]

const recentPosts = [
  {
    id: 3,
    title: "Essential Computer Maintenance Tips for Home Users",
    excerpt: "Keep your home computer running smoothly with these expert maintenance tips and tricks.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Laith Al-Rashid",
    date: "2024-05-10",
    readTime: "6 min read",
    category: "Home Computing",
    tags: ["Maintenance", "Tips", "Home"],
  },
  {
    id: 4,
    title: "Building Responsive Web Applications with Modern Frameworks",
    excerpt: "Explore the latest web development frameworks and learn how to create stunning, responsive applications.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Maia Thompson",
    date: "2024-05-08",
    readTime: "10 min read",
    category: "Software Development",
    tags: ["Web Development", "Frameworks", "Responsive"],
  },
  {
    id: 5,
    title: "Network Optimization Techniques for Better Performance",
    excerpt: "Learn how to optimize your business network for maximum performance and reliability.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Joseph Chen",
    date: "2024-05-05",
    readTime: "7 min read",
    category: "Networking",
    tags: ["Networking", "Performance", "Business"],
  },
  {
    id: 6,
    title: "Data Recovery Best Practices: What Every Business Should Know",
    excerpt: "Protect your valuable business data with these proven backup and recovery strategies.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Natalie Rodriguez",
    date: "2024-05-03",
    readTime: "9 min read",
    category: "Data Management",
    tags: ["Data Recovery", "Backup", "Business"],
  },
  {
    id: 7,
    title: "Smart Home Technology Trends for 2024",
    excerpt: "Discover the latest smart home innovations and how they can improve your daily life.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Laith Al-Rashid",
    date: "2024-05-01",
    readTime: "5 min read",
    category: "Smart Home",
    tags: ["Smart Home", "IoT", "Automation"],
  },
  {
    id: 8,
    title: "Mobile App Development: Native vs Cross-Platform",
    excerpt: "Compare different mobile development approaches and choose the right strategy for your project.",
    image: "/placeholder.svg?height=300&width=400",
    author: "Maia Thompson",
    date: "2024-04-28",
    readTime: "11 min read",
    category: "Mobile Development",
    tags: ["Mobile", "Development", "Apps"],
  },
]

const categories = [
  { name: "Cybersecurity", count: 12, color: "bg-red-500" },
  { name: "Cloud Computing", count: 8, color: "bg-blue-500" },
  { name: "Software Development", count: 15, color: "bg-green-500" },
  { name: "Networking", count: 10, color: "bg-purple-500" },
  { name: "Data Management", count: 6, color: "bg-yellow-500" },
  { name: "Home Computing", count: 9, color: "bg-pink-500" },
  { name: "Smart Home", count: 4, color: "bg-indigo-500" },
  { name: "Mobile Development", count: 7, color: "bg-teal-500" },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001f3d] via-[#002a5c] to-[#001f3d]">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001f3d] to-black z-0"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              {/* Animated Tech Insights Sticker */}
              <div className="inline-block mb-8 animate-pulse">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#f85c04] rounded-full blur-md opacity-50 animate-ping"></div>
                  <div className="relative bg-gradient-to-r from-[#f85c04] to-[#ff7a1a] text-white px-6 py-3 rounded-full shadow-lg border-2 border-white/30 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 mr-2 animate-spin-slow" />
                    <span className="font-bold">TECH INSIGHTS</span>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                NexusByte <span className="text-[#f85c04]">Tech Blog</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay ahead of the curve with expert insights, industry trends, and practical tips from Sydney's leading
                I.T. professionals.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search articles, topics, or technologies..."
                    className="pl-12 pr-4 py-4 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#f85c04] focus:ring-[#f85c04] rounded-xl text-lg"
                  />
                  <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#f85c04] to-[#ff7a1a] hover:from-[#f85c04]/90 hover:to-[#ff7a1a]/90">
                    Search
                  </Button>
                </div>
              </div>
            </div>

            {/* Categories Filter */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 mb-12">
              <div className="flex items-center gap-4 mb-4">
                <Filter className="w-5 h-5 text-[#f85c04]" />
                <h3 className="text-white font-semibold">Browse by Category</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={`/blog/category/${category.name.toLowerCase().replace(" ", "-")}`}
                    className="group"
                  >
                    <div className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-4 py-2 transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                        <span className="text-white font-medium">{category.name}</span>
                        <span className="text-gray-400 text-sm">({category.count})</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#001f3d] to-black z-0"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-3 mb-12">
              <TrendingUp className="w-6 h-6 text-[#f85c04]" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Featured <span className="text-[#f85c04]">Articles</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="group">
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
                    <div className="relative">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-[#f85c04] to-[#ff7a1a] text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f85c04] transition-colors">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>

                      <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span key={tag} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={`/blog/${post.id}`}
                          className="text-[#f85c04] hover:text-[#ff7a1a] font-semibold flex items-center gap-1 group"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#001f3d] to-black z-0"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-3 mb-12">
              <BookOpen className="w-6 h-6 text-[#f85c04]" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Latest <span className="text-[#f85c04]">Articles</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <article key={post.id} className="group">
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
                    <div className="relative">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#f85c04] transition-colors">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>

                      <p className="text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={`/blog/${post.id}`}
                          className="text-[#f85c04] hover:text-[#ff7a1a] font-semibold flex items-center gap-1 group"
                        >
                          Read
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button className="bg-gradient-to-r from-[#f85c04] to-[#ff7a1a] hover:from-[#f85c04]/90 hover:to-[#ff7a1a]/90 text-white px-8 py-3 text-lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#001f3d] to-black z-0"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 text-center relative">
              {/* Animated Newsletter Sticker */}
              <div className="absolute -top-6 -right-6 animate-pulse">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#f85c04] rounded-full blur-md opacity-50 animate-ping"></div>
                  <div className="relative bg-gradient-to-r from-[#f85c04] to-[#ff7a1a] text-white p-2 rounded-full shadow-lg border-2 border-white/30 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 mr-1 animate-spin-slow" />
                    <span className="font-bold text-sm">WEEKLY UPDATES</span>
                  </div>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                Stay Updated with <span className="text-[#f85c04]">Tech Insights</span>
              </h3>

              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get the latest I.T. tips, industry news, and exclusive insights delivered straight to your inbox every
                week.
              </p>

              <div className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#f85c04] focus:ring-[#f85c04]"
                  />
                  <Button className="bg-gradient-to-r from-[#f85c04] to-[#ff7a1a] hover:from-[#f85c04]/90 hover:to-[#ff7a1a]/90 whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
                <p className="text-gray-400 text-sm mt-3">No spam, unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
