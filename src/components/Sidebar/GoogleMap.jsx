const GoogleMap = () => {
  return (
    <div className="map-area">
      <div className="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30158.90109486837!2d72.83076480447757!3d19.11368110137828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83c05b7fc89%3A0xbe87eb057f3aafda!2sAndheri%2C%20Maharashtra%20400059!5e0!3m2!1sen!2sin!4v1765800575566!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0, width: "100%", height: "450px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
