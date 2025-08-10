

function Map() {
  return (
   <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4980.386754383922!2d4.518464994162992!3d7.796639050765906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNDcnNDcuNCJOIDTCsDMxJzA1LjgiRQ!5e0!3m2!1sen!2sng!4v1754821761930!5m2!1sen!2sng"
    className="w-full h-full border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Hotel Location"
  ></iframe>
</div>
  );
}

export default Map;