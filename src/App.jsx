import React from 'react'
<a href="#projects" className="text-sm hover:underline">Projects</a>
<a href="#contact" className="text-sm hover:underline">Contact</a>
</nav>
</header>


<main className="max-w-5xl mx-auto px-6 pb-20">
<section className="grid md:grid-cols-3 gap-8 items-center bg-white p-8 rounded-2xl shadow-lg">
<div className="md:col-span-2">
<h2 className="text-3xl font-extrabold mb-2">Hello — I'm Aniket</h2>
<p className="text-slate-700 mb-4">Cloud DevOps Engineer who builds scalable infrastructure and automates reliable CI/CD pipelines. I enjoy solving complex problems with clean, testable automation.</p>
<div className="flex gap-3">
<a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg shadow">View projects</a>
<a href="/resume.pdf" download className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg">
<ArrowDownTray size={16} /> Resume
</a>
</div>
</div>


<div className="flex justify-center md:justify-end">
<div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-slate-50 shadow">
<img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80" alt="avatar" className="object-cover w-full h-full" />
</div>
</div>
</section>


<section id="about" className="mt-10 bg-white p-8 rounded-2xl shadow-lg">
<h3 className="text-xl font-semibold mb-3">About me</h3>
<p className="text-slate-700">I have experience automating infrastructure using Terraform and deploying applications with Jenkins and Docker. I focus on reliability, observability and repeatable processes. Outside work I tinker with embedded systems and build small ML pipelines.</p>


<div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-slate-600">
<div className="p-3 bg-slate-50 rounded">AWS · Terraform</div>
<div className="p-3 bg-slate-50 rounded">CI/CD · Jenkins</div>
<div className="p-3 bg-slate-50 rounded">Docker · Kubernetes</div>
<div className="p-3 bg-slate-50 rounded">Python · Bash</div>
</div>
</section>


<section id="projects" className="mt-10">
<h3 className="text-xl font-semibold mb-4">Projects</h3>
<div className="grid md:grid-cols-3 gap-6">
{projects.map((p) => (
<article key={p.id} className="bg-white p-6 rounded-xl shadow">
<h4 className="font-bold mb-2">{p.title}</h4>
<p className="text-sm text-slate-600 mb-4">{p.description}</p>
<div className="flex flex-wrap gap-2 mb-4">
{p.tags.map((t) => (
<span key={t} className="text-xs px-2 py-1 bg-slate-100 rounded">{t}</span>
))}
</div>
<a href={p.url} className="text-sm inline-block mt-auto underline">View repo</a>
</article>
))}
</div>
</section>


<section id="contact" className="mt-10 bg-white p-8 rounded-2xl shadow-lg">
<h3 className="text-xl font-semibold mb-3">Contact</h3>
<p className="text-slate-700 mb-4">Email: <a href="mailto:you@example.com" className="underline">you@example.com</a></p>
<div className="grid md:grid-cols-2 gap-4">
<input placeholder="Your name" className="p-3 border rounded" />
<input placeholder="Your email" className="p-3 border rounded" />
<textarea placeholder="Message" className="col-span-2 p-3 border rounded" rows={4} />
<button className="col-span-2 px-4 py-2 bg-slate-900 text-white rounded">Send message</button>
</div>
</section>
</main>


<footer className="max-w-5xl mx-auto p-6 text-center text-sm text-slate-500">© {new Date().getFullYear()} Aniket Jadhav — Built with React & Tailwind</footer>
</div>
)
}
