import React, {Component} from 'react';
import { connect } from "unistore/react";
import {render} from 'react-dom';
import {StaticMap} from 'react-map-gl';
import axios from 'axios';
import DeckGL, {GeoJsonLayer} from 'deck.gl';
import { HexagonLayer } from '@deck.gl/aggregation-layers';
// import { includedTreesSelector, wateredTreesLoadedSelector } from '../../state/Selectors';
import Actions from '../../state/Actions';
import Store from '../../state/Store';
import { wateredTreesSelector } from '../../state/Selectors';
import { fetchAPI, createAPIUrl } from '../../state/utils';

import { setDataLoaded, setSelectedTreeData, setSelectedTreeDataLoading, setSidebar, setDataIncluded } from '../../store/actions/index';


const MAPBOX_TOKEN = process.env.API_KEY;

export const INITIAL_VIEW_STATE = {
	latitude: 52.500869,
	longitude: 13.419047,
	zoom: 16,
	maxZoom: 19,
	minZoom: 9,
	pitch: 45,
	bearing: 0
};

class DeckGLMap extends React.Component {

	constructor(props) {
		super(props);

		this.bool = true;

		this.state = {
		  highlightedObject: 0,
		  hoveredObject: null,
		  data: null,
		  included: null,
			selectedTree: null
		};

		this._onClick = this._onClick.bind(this);
		this._renderTooltip = this._renderTooltip.bind(this);
		// this._requestDb = this._requestDb.bind(this);
		this._getFillColor = this._getFillColor.bind(this);
	};

	_renderLayers() {
		const {data = this.state.data} = this.props;

		var COLOR_RANGE = [
			[1, 152, 189],
			[73, 227, 206],
			[216, 254, 181],
			[254, 237, 177],
			[254, 173, 84],
			[209, 55, 78]
		]

		const features = data.features;
		const hexagon = new HexagonLayer({
			id: 'hexagon-layer',
			data: features,
			pickable: true,
			extruded: true,
			colorRange: COLOR_RANGE,
			elevationRange: [0, 1000],
			radius: 20,
			elevationScale: 2,
			getPosition: d => { return d.geometry.coordinates},
		})

		if (data != null) {

			// const { includedTrees, wateredTreeDataUpdated } = this.props;

			return [
				new GeoJsonLayer({
					id: 'geojson',
					data,
					opacity: 1,
					stroked: false,
					getRadius: 6,
					filled: true,
					pickable: true,
					getLineColor: [0, 255, 255],
					getRadius: 4,
					pointRadiusMinPixels: 2,
					autoHighlight: true,
					highlightColor: [200, 200, 200, 255],
					pointRadiusScale: 2,
					transitions: {
						getFillColor: 500,
					},
					getFillColor: (info) => {
						return [0, 0, 255, 255];
						// let included = includedTrees[info.properties['id']] != undefined ? includedTrees[info.properties['id']].included : false;

						// if (wateredTreeDataUpdated && this.state.highlightedObject == info.properties['id']) {
						//    return [150, 150, 150, 200]
						// } else if (wateredTreeDataUpdated && included) {
						//     return [102, 245, 173, 200]
						// } else if (wateredTreeDataUpdated && !included) {
						//     return [164, 181, 222, 150]
						// }

						// if (this.props.treeAgeDataUpdated && this.state.highlightedObject == info.properties['id']) {
						//     return [150, 150, 150, 200]
						// } else if (this.props.treeAgeDataUpdated && included) {
						//     return [102, 245, 173, 255];
						// } else if (this.props.treeAgeDataUpdated && !included) {
						//     return [0, 0, 255, 0];
						// }

						// if (this.props.treeTypeDataUpdated  && this.state.highlightedObject == info.properties['id']) {
						//     return [150, 150, 150, 200]
						// } else if (this.props.treeTypeDataUpdated && included) {
						//     let type = includedTrees[info.properties['id']].type;
						//     return this.props.typeColors[type].color;
						// } else if (this.props.treeTypeDataUpdated && !included) {
						//     return [0, 0, 255, 0];
						// }

						// if (this.props.treeSizeDataUpdated  && this.state.highlightedObject == info.properties['id']) {
						//     return [150, 150, 150, 200]
						// } else if (this.props.treeSizeDataUpdated && included) {
						//     return [102, 245, 173, 255]
						// } else if (this.props.treeSizeDataUpdated && !included) {
						//     return [0, 0, 255, 0];
						// }

					},
					onClick: (info) => {
						this._onClick(info.x, info.y, info.object)

						if (info.object != undefined) {
							this.setState({ highlightedObject: info.object.properties['id'] })
						}
					},
					updateTriggers: {
						getFillColor: [this.getWateredTrees, this.state.highlightedObject]
					}
				})
			];
		}
	}

	_getFillColor(info) {
		// console.log(info.properties.id);
		// console.log(info.object.properties['id'], this.props.wateredTrees)

		// return [102, 245, 173, 200];
	}


	_onClick(x, y, object) {
		const { state } = this.props;
		const id = object.properties.id;
		const url = createAPIUrl(state, `api/get-tree?id=${id}`);
		const res = fetchAPI(url).then(r => { Store.setState({ selectedTree: r.data }) });
	}

	_renderTooltip() {
		const {x, y, hoveredObject} = this.state;
		let data;

		if (hoveredObject != null) {
		  data = hoveredObject.data.properties;
		  this.setState({ hoveredObject })
		  console.log(data);
		}
	}

	_onload(evt) {
		const map = evt.target;
		const insertBefore = map.getStyle();

		const firstLabelLayerId = map.getStyle().layers.find(layer => layer.type === 'symbol').id;

		map.addLayer({
			'id': '3d-buildings',
			'source': 'composite',
			'source-layer': 'building',
			'filter': ['==', 'extrude', 'true'],
			'type': 'fill-extrusion',
			'minzoom': 0,
			'paint': {
			'fill-extrusion-color': '#FFF',
			'fill-extrusion-height': [
			"interpolate", ["linear"], ["zoom"],
			15, 0,
			15.05, ["get", "height"]
			],
			'fill-extrusion-base': [
				"interpolate", ["linear"], ["zoom"], 15, 0, 15.05, ["get", "min_height"]
			],
			'fill-extrusion-opacity': .3
			}
			}, firstLabelLayerId);
	}

	componentDidUpdate() {
		const { wateredTrees } = this.props;
		console.log(wateredTrees)
		// const { wateredTrees, includedTrees, wateredTreesData } = this.props;
		// const { status, data } = wateredTrees.datum;

		// if (status === 'SUCCESS' && includedTrees) {
		//     console.log(this.props)
		// }
		// console.log(this.props)
	}

	// _requestDb(x, y, obj) {
	//     const id = obj.properties.id;
	//     const remote = "https://dshbp72tvi.execute-api.us-east-1.amazonaws.com/dev/trees";
	//     const local = "http://localhost:3000/trees"
	//     const url = `${remote}/${id}`;

	//     this.dispatchSetSelectedTreeDataLoading(true);
	//     console.log('selected tree loading', this.props.selectedTreeDataLoading);

	//     axios.get(url)
	//     .then(res => {
	//         this.setState({x, y, hoveredObject: res});
	//         this.dispatchSetSelectedTreeData(res);
	//         this.dispatchSetSelectedTreeDataLoading(false);
	//         console.log(this.props.selectedTreeDataLoading);
	//             // this._setTooltip(res, obj.object.x, obj.object.y)
	//         })
	//         .catch(err => {
	//         console.log(err);
	//     })
	// }

	dispatchSetSelectedTreeData(val) {
		this.props.dispatch(setSelectedTreeData(val.data));
	}

	dispatchDataLoaded(state) {
		this.props.dispatch(setDataLoaded(state));
	}

	dispatchSetSelectedTreeDataLoading(val) {
		this.props.dispatch(setSelectedTreeDataLoading(val));
	}

	dispatchSetDataIncluded(val) {
		this.props.dispatch(setDataIncluded(val));
	}

	render() {
		const {viewState, controller = true, baseMap = true, dataLoaded, wateredTrees, wateredTreesFetched, isLoading } = this.props;

		if (isLoading) {
			return (
				<span>Lade Berlins Baumdaten ...</span>
			)
		} else if (!isLoading) {
			return (
				<DeckGL
					layers={this._renderLayers()}
					initialViewState={INITIAL_VIEW_STATE}
					viewState={viewState}
					controller={controller}
				>

					{baseMap && (
					<StaticMap
						reuseMaps
						mapStyle="mapbox://styles/mapbox/light-v9"
						preventStyleDiffing={true}
						mapboxApiAccessToken={MAPBOX_TOKEN}
						onLoad={this._onload.bind(this)}
					/>
					)}

					{/* {this._renderTooltip} */}
				</DeckGL>
			);
		}
	}

}

export default connect(state => ({
//   wateredTrees: state.wateredTrees,
//   includedTrees: state.includedTrees,
  data: state.data,
//   wateredTreesFetched: state.wateredTreesFetched,
//   wateredTreeDataUpdated: state.wateredTreeDataUpdated,
  isLoading: state.isLoading,
	wateredTrees: wateredTreesSelector(state),
	state: state,
	selectedTree: state.selectedTree,

}), Actions)(DeckGLMap);