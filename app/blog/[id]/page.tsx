import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, BookOpen, Tag, Heart, MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Blog Post - NexusByte Tech Insights",
  description:
    "Read the latest technology insights and expert tips from NexusByte's team of I.T. professionals in Sydney.",
}

// Mock blog post data
const blogPost = {
  id: 1,
  title: "The Future of Cybersecurity: Protecting Sydney Businesses in 2024",
  content: `
    <p>As we advance through 2024, cybersecurity continues to evolve at an unprecedented pace. Sydney businesses, from small startups to large enterprises, face increasingly sophisticated threats that require robust, multi-layered security strategies.</p>

    <h2>The Current Threat Landscape</h2>
    <p>The cybersecurity landscape in Australia has become more complex than ever. Recent statistics show that cyber attacks on Australian businesses have increased by 23% in the past year alone. These attacks range from ransomware and phishing attempts to advanced persistent threats (APTs) that can remain undetected for months.</p>

    <h3>Key Threats Facing Sydney Businesses</h3>
    <ul>
      <li><strong>Ransomware Attacks:</strong> Sophisticated encryption-based attacks that can cripple business operations</li>
      <li><strong>Social Engineering:</strong> Human-focused attacks that exploit trust and authority</li>
      <li><strong>Supply Chain Attacks:</strong> Targeting third-party vendors to gain access to primary targets</li>
      <li><strong>Cloud Security Breaches:</strong> Exploiting misconfigurations in cloud environments</li>
    </ul>

    <h2>Building a Robust Security Framework</h2>
    <p>Creating an effective cybersecurity strategy requires a comprehensive approach that addresses both technical and human factors. Here's how Sydney businesses can build resilient security frameworks:</p>

    <h3>1. Multi-Factor Authentication (MFA)</h3>
    <p>Implementing MFA across all business systems is no longer optional—it's essential. This simple yet effective measure can prevent up to 99.9% of automated attacks.</p>

    <h3>2. Regular Security Training</h3>
    <p>Your employees are your first line of defense. Regular training sessions help staff identify and respond appropriately to potential threats.</p>

    <h3>3. Network Segmentation</h3>
    <p>Dividing your network into smaller, isolated segments limits the potential damage from any single breach.</p>

    <h2>The Role of AI in Cybersecurity</h2>
    <p>Artificial Intelligence is revolutionizing how we approach cybersecurity. AI-powered systems can detect anomalies, predict potential threats, and respond to incidents faster than traditional methods.</p>

    <h3>Benefits of AI-Driven Security</h3>
    <ul>
      <li>Real-time threat detection and response</li>
      <li>Predictive analysis of potential vulnerabilities</li>
      <li>Automated incident response</li>
      <li>Reduced false positives</li>
    </ul>

    <h2>Compliance and Regulatory Considerations</h2>
    <p>Australian businesses must navigate an increasingly complex regulatory environment. The Privacy Act 1988, along with industry-specific regulations, requires businesses to implement appropriate security measures to protect personal information.</p>

    <h2>Looking Ahead: Cybersecurity Trends for 2024</h2>
    <p>As we move through 2024, several trends are shaping the cybersecurity landscape:</p>
    <ul>
      <li>Zero Trust Architecture becoming the standard</li>
      <li>Increased focus on supply chain security</li>
      <li>Growth in cybersecurity insurance requirements</li>
      <li>Enhanced regulatory compliance frameworks</li>
    </ul>

    <h2>Conclusion</h2>
    <p>The future of cybersecurity requires a proactive, comprehensive approach. Sydney businesses that invest in robust security frameworks today will be better positioned to face the challenges of tomorrow. Remember, cybersecurity is not a one-time investment—it's an ongoing commitment to protecting your business, your customers, and your reputation.</p>
  `,
  excerpt:
    "Discover the latest cybersecurity threats facing Australian businesses and learn how to implement robust security measures to protect your organization.",
  image: "/placeholder.svg?height=600&width=1200",
  author: {
    name: "Joseph Chen",
    avatar: "/team/joseph.png",
    bio: "Senior Cybersecurity Specialist with over 8 years of experience protecting Sydney businesses from digital threats.",
  },
  date: "2024-05-15",
  readTime: "8 min read",
  category: "Cybersecurity",
  tags: ["Security", "Business", "Trends", "AI", "Compliance"],
  likes: 42,
  comments: 8,
}

const relatedPosts = [
  {
    id: 2,
    title: "Essential Network Security Best Practices",
    image: "/placeholder.svg?height=200&width=300",
    category: "Networking",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Cloud Security: Protecting Your Data in the Cloud",
    image: "/placeholder.svg?height=200&width=300",
    category: "Cloud Computing",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "Incident Response Planning for Small Businesses",
    image: "/placeholder.svg?height=200&width=300",
    category: "Cybersecurity",
    readTime: "9 min read",
  },
]

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001f3d] via-[#002a5c] to-[#001f3d]">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#001f3d] to-black z-0"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#f85c04] hover:text-[#ff7a1a] mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            {/* Article Header */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 mb-8">
              <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                <span className="bg-gradient-to-r from-[#f85c04] to-[#ff7a1a] text-white px-3 py-1 rounded-full font-semibold">
                  {blogPost.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(blogPost.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{blogPost.readTime}</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{blogPost.title}</h1>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={blogPost.author.avatar || "/placeholder.svg"}
                    alt={blogPost.author.name}
                    className="w-12 h-12 rounded-full border-2 border-[#f85c04]"
                  />
                  <div>
                    <p className="text-white font-semibold">{blogPost.author.name}</p>
                    <p className="text-gray-400 text-sm">{blogPost.author.bio}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Heart className="w-5 h-5" />
                    <span>{blogPost.likes}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MessageCircle className="w-5 h-5" />
                    <span>{blogPost.comments}</span>
                  </div>
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-xl overflow-hidden mb-8">
              <img
                src={blogPost.image || "/placeholder.svg"}
                alt={blogPost.title}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#001f3d] to-black z-0"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 mb-8">
              <div
                className="prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
                style={{
                  color: "#e5e7eb",
                }}
              />

              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-5 h-5 text-[#f85c04]" />
                  <span className="text-white font-semibold">Tags:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {blogPost.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag.toLowerCase()}`}
                      className="bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comments Section */}
        <section className="py-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#001f3d] to-black z-0"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-[#f85c04]" />
                Comments ({blogPost.comments})
              </h3>

              {/* Comment Form */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Leave a Comment</h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#f85c04] focus:ring-[#f85c04]"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#f85c04] focus:ring-[#f85c04]"
                    />
                  </div>
                  <Textarea
                    placeholder="Your comment..."
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#f85c04] focus:ring-[#f85c04]"
                  />
                  <Button className="bg-gradient-to-r from-[#f85c04] to-[#ff7a1a] hover:from-[#f85c04]/90 hover:to-[#ff7a1a]/90">
                    Post Comment
                  </Button>
                </div>
              </div>

              {/* Sample Comments */}
              <div className="space-y-6">
                <div className="border-b border-white/20 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#f85c04] to-[#ff7a1a] rounded-full flex items-center justify-center text-white font-semibold">
                      M
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-white font-semibold">Michael Chen</span>
                        <span className="text-gray-400 text-sm">2 days ago</span>
                      </div>
                      <p className="text-gray-300">
                        Excellent article! The insights on AI-driven security are particularly valuable. We've been
                        considering implementing some of these strategies at our company.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-b border-white/20 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#f85c04] to-[#ff7a1a] rounded-full flex items-center justify-center text-white font-semibold">
                      S
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-white font-semibold">Sarah Williams</span>
                        <span className="text-gray-400 text-sm">3 days ago</span>
                      </div>
                      <p className="text-gray-300">
                        As a small business owner in Sydney, this information is incredibly helpful. The section on
                        compliance requirements was exactly what I needed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#001f3d] to-black z-0"></div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-6 h-6 text-[#f85c04]" />
              <h3 className="text-2xl font-bold text-white">
                Related <span className="text-[#f85c04]">Articles</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <article key={post.id} className="group">
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
                    <div className="relative">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#f85c04] transition-colors">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h4>

                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">{post.readTime}</span>
                        <Link
                          href={`/blog/${post.id}`}
                          className="text-[#f85c04] hover:text-[#ff7a1a] text-sm font-semibold"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#001f3d] to-black z-0"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 text-center relative">
              {/* Animated Newsletter Sticker */}
              <div className="absolute -top-6 -right-6 animate-pulse">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#f85c04] rounded-full blur-md opacity-50 animate-ping"></div>
                  <div className="relative bg-gradient-to-r from-[#f85c04] to-[#ff7a1a] text-white p-2 rounded-full shadow-lg border-2 border-white/30 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 mr-1 animate-spin-slow" />
                    <span className="font-bold text-sm">STAY UPDATED</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Enjoyed this article?</h3>

              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for more expert insights and technology tips.
              </p>

              <div className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#f85c04] focus:ring-[#f85c04]"
                  />
                  <Button className="bg-gradient-to-r from-[#f85c04] to-[#ff7a1a] hover:from-[#f85c04]/90 hover:to-[#ff7a1a]/90">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
