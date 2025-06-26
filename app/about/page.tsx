
import Image from "next/image";
export default function About() {
    return (
        <div className="h-full bg-white shadow-md p-10">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10">
                <Image
                    src="/my-profile.jpg"
                    alt="Profile"
                    width={160}
                    height={160}
                    className="w-40 h-40 rounded-full object-cover border-4 border-blue-500"
                />
                <div className="mt-6 md:mt-0 text-center md:text-left">
                    <h1 className="text-3xl font-bold text-gray-800">Tanawong Koudkitkan</h1>
                    <p className="text-blue-500 text-lg mt-1">Full Stack Developer</p>
                    <p className="mt-4 text-gray-600">
                        Hello, my name is Thanawong Kuatkitkan.
                        My nickname is Boom. I am 21 years old and was born on January 12, 2004.
                        I enjoy eating and watching movies.
                        Currently, I am pursuing a Bachelor's degree in the Faculty of Science and Digital Innovation, majoring in Computer Science.
                    </p>
                </div>
            </div>

            {/* Contact Info */}
            <div className="mt-10">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                <ul className="text-gray-700 space-y-2">
                    <li><strong>Email:</strong> tanawong0912@gmail.com</li>
                    <li><strong>Phone:</strong> +66 84 583 0350</li>
                    <li><strong>Location:</strong> Phangnga, Thailand</li>
                </ul>
            </div>

            {/* Skills */}
            <div className="mt-10">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Skills</h2>
                <div className="flex flex-wrap gap-3">
                    {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "MongoDB", "Canvas", "Figma"].map(skill => (
                        <span
                            key={skill}
                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Social Media */}
            <div className="mt-10">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Social Media</h2>
                <div className="flex space-x-6">
                    {/* GitHub */}
                    <a
                        href="https://github.com/bibboo01"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-black"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .5C5.6.5.5 5.7.5 12.2c0 5.2 3.4 9.6 8.1 11.2.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.5-4-1.5-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1 .1.6 2.4 3.3 1.7v-2c-2.6-.3-5.4-1.3-5.4-6 0-1.3.4-2.3 1.2-3.1-.1-.3-.6-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.2 1.9-.3 2.8-.3s1.9.1 2.8.3c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.7.8 1.2 1.8 1.2 3.1 0 4.7-2.8 5.7-5.4 6v2.1c0 .3.2.7.8.6 4.7-1.6 8.1-6 8.1-11.2C23.5 5.7 18.4.5 12 .5z" />
                        </svg>
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/tk_mistery"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:text-pink-800"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5a4.8 4.8 0 0 1 1.7 1.1 4.8 4.8 0 0 1 1.1 1.7c.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5a4.8 4.8 0 0 1-1.1 1.7 4.8 4.8 0 0 1-1.7 1.1c-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5a4.8 4.8 0 0 1-1.7-1.1 4.8 4.8 0 0 1-1.1-1.7c-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5a4.8 4.8 0 0 1 1.1-1.7 4.8 4.8 0 0 1 1.7-1.1c.5-.2 1.3-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.8.1-1 .1-1.6.2-2 .4-.5.2-.9.5-1.3.9s-.7.8-.9 1.3c-.2.4-.3 1-.4 2-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1 .2 1.6.4 2 .2.5.5.9.9 1.3s.8.7 1.3.9c.4.2 1 .3 2 .4 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1-.1 1.6-.2 2-.4.5-.2.9-.5 1.3-.9s.7-.8.9-1.3c.2-.4.3-1 .4-2 .1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1-.2-1.6-.4-2-.2-.5-.5-.9-.9-1.3s-.8-.7-1.3-.9c-.4-.2-1-.3-2-.4-1.3-.1-1.7-.1-4.8-.1zm0 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 1.8a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4zm5.4-.9a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0z" />
                        </svg>
                    </a>

                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/beeboy.bam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.351C0 23.407.593 24 1.324 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.661-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.127c.73 0 1.323-.593 1.323-1.324V1.324C24 .593 23.407 0 22.676 0z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}