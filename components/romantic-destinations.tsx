const RomanticDestinations = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg p-12 text-center text-white mb-12">
          <h2 className="text-4xl font-bold mb-4">Let&apos;s Make Your Next Holiday Amazing</h2>
          <p className="text-lg opacity-90">Create unforgettable memories with our curated travel experiences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg p-6">
            <h3 className="font-bold text-lg text-foreground mb-2">Get Your Favorite Resort Bookings</h3>
            <p className="text-sm text-muted-foreground mb-4">Browse and book the best resorts with exclusive deals</p>
            <div className="bg-white rounded-lg p-4 aspect-video flex items-center justify-center border-2 border-dashed border-primary/30">
              <span className="text-muted-foreground text-sm">Resort Preview</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-6">
            <h3 className="font-bold text-lg text-foreground mb-2">Find Best Flights</h3>
            <p className="text-sm text-muted-foreground mb-4">Compare and book flights from top airlines</p>
            <div className="bg-white rounded-lg p-4 aspect-video flex items-center justify-center border-2 border-dashed border-primary/30">
              <span className="text-muted-foreground text-sm">Flight Options</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg p-6">
            <h3 className="font-bold text-lg text-foreground mb-2">Complete Tour Packages</h3>
            <p className="text-sm text-muted-foreground mb-4">All-inclusive travel packages at great prices</p>
            <div className="bg-white rounded-lg p-4 aspect-video flex items-center justify-center border-2 border-dashed border-primary/30">
              <span className="text-muted-foreground text-sm">Packages</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RomanticDestinations
