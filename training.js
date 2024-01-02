const weightsNN = {
  type: "NeuralNetwork",
  sizes: [27, 13, 8],
  layers: [
    { weights: [], biases: [] },
    {
      weights: [
        [
          -275.65264892578125, -185.3890380859375, -41.6590690612793,
          -42.98402786254883, 9.470388412475586, 26.6179256439209,
          -9.849881172180176, -4.76001501083374, -1.7259362936019897,
          -0.1159859299659729, -0.04894677549600601, 246.8235626220703,
          62.20220184326172, 14.300600051879883, 15.961423873901367,
          31.704849243164062, 17.31592559814453, 10.117963790893555,
          5.863440990447998, 3.399379253387451, 0.07736794650554657,
          1.0829894542694092, 0.940277636051178, 0.8025896549224854,
          -0.8400223851203918, 0.0002448339364491403, 0.10665164887905121,
        ],
        [
          235.65557861328125, -193.1495361328125, 207.17654418945312,
          109.31986236572266, 51.979461669921875, 29.552108764648438,
          15.23475456237793, 8.121228218078613, 2.42513370513916,
          0.0073597850278019905, 0.09119699150323868, 1.6580008268356323,
          -358.04840087890625, -113.9341049194336, -124.69341278076172,
          -59.999061584472656, -30.63201904296875, -15.740426063537598,
          -7.322576522827148, -4.172018051147461, -1.3775404691696167,
          -1.0418668985366821, -0.5570589900016785, 1.8897615671157837,
          -0.09131427109241486, -0.09921550750732422, -0.10990806668996811,
        ],
        [
          -214.095703125, 79.49604797363281, -141.89793395996094,
          -80.59910583496094, -39.08109664916992, -18.1413631439209,
          -9.977992057800293, -5.447648525238037, -2.97302508354187,
          -0.06416265666484833, -0.0627651959657669, -6.761646747589111,
          387.14239501953125, 216.67361450195312, 98.36929321289062,
          54.45954895019531, 26.022249221801758, 13.24948787689209,
          6.036778926849365, 2.9567017555236816, 1.412667989730835,
          0.10827022045850754, -1.629887342453003, -0.03233524411916733,
          1.088277816772461, 0.11711050570011139, -0.1334562450647354,
        ],
        [
          11.950136184692383, 14.34623908996582, 29.994762420654297,
          -227.79034423828125, 131.13888549804688, 67.86807250976562,
          33.392120361328125, 14.492613792419434, 5.56631326675415,
          -0.05646996572613716, -0.11184802651405334, -65.68492126464844,
          62.277549743652344, 81.72944641113281, -278.5406188964844,
          -139.7245635986328, -69.0479736328125, -33.506534576416016,
          -15.258047103881836, -12.025694847106934, -2.93955135345459,
          -1.9710439443588257, -2.9553864002227783, -0.6768152713775635,
          0.0009023617603816092, -0.11386875808238983, -0.03962093964219093,
        ],
        [
          126.70550537109375, -173.5067596435547, 168.38137817382812,
          49.1262321472168, 62.191650390625, 23.518075942993164,
          12.272526741027832, 5.911982536315918, 4.181394100189209,
          0.1132906898856163, 0.06552930176258087, 4.952775955200195,
          55.250465393066406, 153.7960662841797, -48.11970520019531,
          -46.76190185546875, -25.98541259765625, -12.549884796142578,
          -6.428070068359375, -2.0286293029785156, -1.7115910053253174,
          -2.0359413623809814, -0.5616822838783264, -1.6954582929611206,
          0.5239568948745728, 0.011712539941072464, 0.17667630314826965,
        ],
        [
          239.99937438964844, 66.18077087402344, 73.62696838378906,
          37.50136947631836, 18.1603946685791, 9.010712623596191,
          4.4500017166137695, 1.8694791793823242, 1.2550708055496216,
          -0.1708083599805832, -0.18529106676578522, -10.40161418914795,
          -279.15167236328125, -147.87637329101562, -83.7760009765625,
          -31.266342163085938, -17.324478149414062, -7.962031841278076,
          -2.7196319103240967, -1.4244465827941895, -0.47768357396125793,
          -0.7537205815315247, -0.034678854048252106, -0.7692080140113831,
          0.3292102813720703, 0.1831277459859848, 0.145900160074234,
        ],
        [
          -116.25606536865234, -129.53660583496094, -96.71927642822266,
          103.62169647216797, -103.8045425415039, -47.57573699951172,
          -19.966045379638672, -11.219525337219238, -2.141446352005005,
          0.13494795560836792, 0.05619196593761444, 4.063737869262695,
          85.63614654541016, 86.97138214111328, 176.76319885253906,
          76.29219055175781, 40.036380767822266, 20.396135330200195,
          8.04585075378418, 4.2814130783081055, 0.23721185326576233,
          1.7111235857009888, -0.11358281970024109, 0.16025222837924957,
          0.31958699226379395, -0.013274846598505974, 0.002466210164129734,
        ],
        [
          370.8775939941406, 15.889083862304688, 26.62315559387207,
          109.91156768798828, 46.41614532470703, 21.901758193969727,
          10.799849510192871, 6.1467413902282715, 2.120198965072632,
          0.03878059238195419, -0.18142113089561462, -197.16217041015625,
          -339.9654235839844, -180.99562072753906, -97.22425842285156,
          -39.02812194824219, -19.542509078979492, -10.70699691772461,
          -5.368086338043213, -1.7040092945098877, -1.308582067489624,
          -0.37679001688957214, 0.0635867565870285, -0.621835470199585,
          -0.6437576413154602, 0.17043755948543549, -0.038407281041145325,
        ],
        [
          -37.794429779052734, -103.3492660522461, -369.2600402832031,
          -180.53793334960938, -89.85904693603516, -45.78094482421875,
          -22.271419525146484, -11.60632038116455, -5.830179214477539,
          -0.11329278349876404, -0.002374709350988269, 0.5665104389190674,
          81.94532775878906, 265.1313781738281, 130.82623291015625,
          66.59666442871094, 30.818185806274414, 16.64546012878418,
          7.91937780380249, 4.501826763153076, 2.0634825229644775,
          -0.05044475570321083, -1.0653797388076782, -0.26995769143104553,
          0.12118619680404663, 0.14250145852565765, 0.10975515097379684,
        ],
        [
          -117.6004409790039, 95.4796142578125, 110.26094055175781,
          -144.04469299316406, 135.05799865722656, 63.556758880615234,
          33.02729415893555, 16.697540283203125, 9.619733810424805,
          -0.09683409333229065, 0.14723315834999084, -37.304080963134766,
          30.990949630737305, 57.494842529296875, -205.0325164794922,
          -100.33399963378906, -49.28617477416992, -22.926610946655273,
          -10.163765907287598, -5.922486305236816, -3.3638076782226562,
          0.034649092704057693, 1.0964305400848389, -0.6121956706047058,
          -1.7704269886016846, 0.1907946616411209, 0.010068923234939575,
        ],
        [
          -155.92660522460938, 7.259680271148682, -56.86577224731445,
          -30.73204803466797, -15.652846336364746, -7.585620403289795,
          -3.5484678745269775, -1.3837617635726929, -1.7665045261383057,
          0.15475119650363922, -0.0037420622538775206, 2.0496675968170166,
          123.72550964355469, 67.73072052001953, 31.907745361328125,
          16.714698791503906, 8.794760704040527, 4.066240310668945,
          1.9804935455322266, 1.5638339519500732, 0.7364041209220886,
          0.4027419686317444, -0.2129877209663391, 0.04606352746486664,
          -0.26961541175842285, 0.04189262539148331, 0.11697912216186523,
        ],
        [
          83.55220031738281, -7.078787803649902, 46.94162368774414,
          15.716497421264648, 6.9725165367126465, 3.870816946029663,
          1.7952122688293457, 1.2466422319412231, 0.502665638923645,
          0.13845446705818176, -0.15883870422840118, -4.484248638153076,
          -104.86792755126953, -65.8393783569336, -26.61438751220703,
          -12.609217643737793, -6.517881393432617, -3.439210891723633,
          -2.115576982498169, -0.5776037573814392, -0.6035226583480835,
          0.42556270956993103, -0.1735573410987854, 0.1992497593164444,
          -0.0495360903441906, -0.013307188637554646, -0.17414404451847076,
        ],
        [
          -412.6874084472656, 41.978546142578125, -185.69473266601562,
          -133.17779541015625, -70.41578674316406, -37.164005279541016,
          -16.84400749206543, -7.478167533874512, -1.9283384084701538,
          -0.12634921073913574, -0.14439290761947632, 2.8595941066741943,
          376.69183349609375, 185.10935974121094, 84.98594665527344,
          43.499107360839844, 20.862703323364258, 9.772281646728516,
          4.873279094696045, 3.2669403553009033, 1.6007658243179321,
          1.0245851278305054, 0.059359416365623474, 1.084657073020935,
          -0.13744056224822998, 0.16787749528884888, -0.07575409859418869,
        ],
      ],
      biases: [
        86.45906829833984, 121.68399047851562, -103.11650085449219,
        69.63888549804688, -40.206146240234375, -28.68666648864746,
        -135.33615112304688, -35.716739654541016, -138.61570739746094,
        -36.66991424560547, -47.46288299560547, 32.8292350769043,
        -184.52317810058594,
      ],
    },
    {
      weights: [
        [
          63.98333740234375, 45.08158874511719, -46.45362091064453,
          11.292261123657227, -8.688621520996094, -13.879256248474121,
          12.338993072509766, -44.41737747192383, -14.996806144714355,
          -2.7765629291534424, 89.21391296386719, -6.666016101837158,
          27.769954681396484,
        ],
        [
          -25.048259735107422, -4.354799270629883, -269.7696228027344,
          3.2083241939544678, -0.01806478202342987, -4.758708477020264,
          2.30131196975708, 0.0847737118601799, 2.26131534576416,
          2.27640962600708, -1.5438839197158813, 2.769392967224121,
          -0.95128333568573,
        ],
        [
          -54.1087760925293, -26.743478775024414, -7.097394943237305,
          5.649023056030273, 7.3800458908081055, -2.0951085090637207,
          -10.892305374145508, -5.243320941925049, 5.889321804046631,
          -12.903421401977539, 19.237991333007812, -32.20301818847656,
          -26.337757110595703,
        ],
        [
          -28.890233993530273, 14.761602401733398, -11.047175407409668,
          5.40113639831543, -18.741086959838867, -519.6876220703125,
          -1.9017949104309082, -9.580360412597656, 6.044349670410156,
          -3.1284711360931396, -7.0839409828186035, 93.4849624633789,
          -4.498106002807617,
        ],
        [
          -82.53031921386719, -7.102764129638672, 21.641939163208008,
          6.981913089752197, 0.5961245894432068, -26.777427673339844,
          1.184122085571289, -8.350486755371094, -13.938199996948242,
          -7.014885425567627, -399.4833679199219, -6.21256160736084,
          -6.922763824462891,
        ],
        [
          -67.85120391845703, 1.5212984085083008, -34.145084381103516,
          5.711181640625, -32.748504638671875, 41.207183837890625,
          35.63936996459961, 35.230812072753906, -10.263213157653809,
          26.497390747070312, -3.2112793922424316, -18.978532791137695,
          -2.759876012802124,
        ],
        [
          -26.171051025390625, 22.08792495727539, 46.806419372558594,
          -15.79112434387207, -0.8909202814102173, -215.4154052734375,
          -3.2673263549804688, 21.94699478149414, -5.903675079345703,
          7.262922286987305, -56.90355682373047, 15.969797134399414,
          -4.654352188110352,
        ],
        [
          -0.9097634553909302, -17.113754272460938, 5.784987449645996,
          -11.523017883300781, -6.17344856262207, -5.69498348236084,
          -2.1491804122924805, -7.963489532470703, 8.462665557861328,
          10.670638084411621, -5.311007022857666, -439.0262145996094,
          -51.23688507080078,
        ],
      ],
      biases: [
        -46.20726013183594, -3.78462290763855, -8.843624114990234,
        -83.5410385131836, -18.531803131103516, -18.393184661865234,
        -56.39016342163086, -2.9862287044525146,
      ],
    },
  ],
  inputLookup: null,
  inputLookupLength: 0,
  outputLookup: {
    "Obesidade (grau 3)": 0,
    "Baixo peso (grau 2)": 1,
    "Obesidade (grau 2)": 2,
    "Baixo peso (grau 3)": 3,
    Sobrepeso: 4,
    "Baixo peso (grau 1)": 5,
    "Peso saudável": 6,
    "Obesidade (grau 1)": 7,
  },
  outputLookupLength: 8,
  options: { inputSize: 0, outputSize: 0, binaryThresh: 0.5 },
  trainOpts: {
    activation: "sigmoid",
    iterations: 20000,
    errorThresh: 0.005,
    log: true,
    logPeriod: 10,
    leakyReluAlpha: 0.01,
    learningRate: 0.3,
    momentum: 0.1,
    callbackPeriod: 10,
    timeout: "Infinity",
    beta1: 0.9,
    beta2: 0.999,
    epsilon: 1e-8,
  },
};
