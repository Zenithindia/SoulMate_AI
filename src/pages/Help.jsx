import "./Help.css";

export default function Help() {
  const categories = [
    { title: "Getting Started", desc: "Learn how to create and manage your profile" },
    { title: "Search Profile", desc: "Find compatible matches easily" },
    { title: "Membership", desc: "Subscription & premium features" },
    { title: "Fraud Alert", desc: "Safety tips & reporting users" },
    { title: "Privacy Settings", desc: "Control your visibility & data" },
    { title: "Initiate Contact", desc: "Send interests & messages" },
    { title: "Login / Password", desc: "Account access help" },
    { title: "Customer Support", desc: "Contact SoulMate AI team" }
  ];

  return (
    <div className="help-page">

      <h1 className="help-title">How can we help you?</h1>

      {/* SEARCH BAR */}
      <div className="help-search">
        <input placeholder="What can we help with?" />
        <button>Search</button>
      </div>

      {/* CATEGORY SECTION */}
      <div className="category-container">
        {categories.map((item, index) => (
          <div key={index} className="category-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span>View all questions</span>
          </div>
        ))}
      </div>

    </div>
  );
}
