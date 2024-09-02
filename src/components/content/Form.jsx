<form onSubmit={handleSubmit}>
  <div className="mb-6">
    <label className="block text-gray-700 font-semibold">Name</label>
    <input
      type="text"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      required
    />
  </div>
  <div className="mb-6">
    <label className="block text-gray-700 font-semibold">Email</label>
    <input
      type="email"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      required
    />
  </div>
  <div className="mb-6">
    <label className="block text-gray-700 font-semibold">Message</label>
    <textarea
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      rows="4"
      required
    ></textarea>
  </div>
  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg"
  >
    Submit
  </button>
</form>;
import React from "react";

function FreakSolar() {
  return (
    <div className="w-11/12 mx-auto p-4">
      <h1 className="text-2xl font-bold">FREAK SOLAR ABSCOND:</h1>
      <p className="">
        The last publicly recorded freak incident solar storm was September 1st
        1859 where humanity was in their infancy with electrical mechanics. Even
        then, all of their electrical components was not spared. There was zero
        recovery, but rather a complete restart of the same experimental science
        lead to today’s pinnacle level at knife-edge. Today our stock-markets,
        farming, housings, computers, bankings, hospitals, aeroplanes,
        militaries to governmental encompassing all livelihood are 95%
        electrical mechanicals just to be impacted by this new Sun to blackout
        our planet. Thereafter incapable of utilising already downed electrical
        mechanical components to recover humanity back to its current state.
        This will be an apocalyptic event. But instead scientists coined it ‘The
        Carrington Event’ or ‘Corona Mass Ejection’ (CME).’
      </p>
    </div>
  );
}

export default FreakSolar;
